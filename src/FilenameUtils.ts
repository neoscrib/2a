/*
 * Ported from Apaches Commons IO FilenameUtils
 * https://github.com/apache/commons-io/blob/master/src/main/java/org/apache/commons/io/FilenameUtils.java
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable:member-ordering

import StringBuilder from './StringBuilder';

/**
 * General file name and file path manipulation utilities.
 * <p>
 * When dealing with file names you can hit problems when moving from a Windows
 * based development machine to a Unix based production machine.
 * This class aims to help avoid those problems.
 * </p>
 * <p>
 * <b>NOTE</b>: You may be able to avoid using this class entirely simply by
 * using JDK {@link java.io.File File} objects and the two argument constructor
 * {@link java.io.File#File(java.io.File, java.lang.String) File(File,String)}.
 * </p>
 * <p>
 * Most methods on this class are designed to work the same on both Unix and Windows.
 * Those that don't include 'System', 'Unix' or 'Windows' in their name.
 * </p>
 * <p>
 * Most methods recognize both separators (forward and back), and both
 * sets of prefixes. See the Javadoc of each method for details.
 * </p>
 * <p>
 * This class defines six components within a file name
 * (example C:\dev\project\file.txt):
 * </p>
 * <ul>
 * <li>the prefix - C:\</li>
 * <li>the path - dev\project\</li>
 * <li>the full path - C:\dev\project\</li>
 * <li>the name - file.txt</li>
 * <li>the base name - file</li>
 * <li>the extension - txt</li>
 * </ul>
 * <p>
 * Note that this class works best if directory file names end with a separator.
 * If you omit the last separator, it is impossible to determine if the file name
 * corresponds to a file or a directory. As a result, we have chosen to say
 * it corresponds to a file.
 * </p>
 * <p>
 * This class only supports Unix and Windows style names.
 * Prefixes are matched as follows:
 * </p>
 * <pre>
 * Windows:
 * a\b\c.txt           --&gt; ""          --&gt; relative
 * \a\b\c.txt          --&gt; "\"         --&gt; current drive absolute
 * C:a\b\c.txt         --&gt; "C:"        --&gt; drive relative
 * C:\a\b\c.txt        --&gt; "C:\"       --&gt; absolute
 * \\server\a\b\c.txt  --&gt; "\\server\" --&gt; UNC
 *
 * Unix:
 * a/b/c.txt           --&gt; ""          --&gt; relative
 * /a/b/c.txt          --&gt; "/"         --&gt; absolute
 * ~/a/b/c.txt         --&gt; "~/"        --&gt; current user
 * ~                   --&gt; "~/"        --&gt; current user (slash added)
 * ~user/a/b/c.txt     --&gt; "~user/"    --&gt; named user
 * ~user               --&gt; "~user/"    --&gt; named user (slash added)
 * </pre>
 * <p>
 * Both prefix styles are matched always, irrespective of the machine that you are
 * currently running on.
 * </p>
 * <p>
 * Origin of code: Excalibur, Alexandria, Tomcat, Commons-Utils.
 * </p>
 *
 * @since 1.1
 */
export default class FilenameUtils {
    private static readonly EMPTY_STRING_ARRAY: string[] = [];

    private static readonly EMPTY_STRING = '';

    private static readonly NOT_FOUND = -1;

    /**
     * The extension separator character.
     * @since 1.4
     */
    public static readonly EXTENSION_SEPARATOR = '.';

    /**
     * The extension separator String.
     * @since 1.4
     */
    public static readonly EXTENSION_SEPARATOR_STR = FilenameUtils.EXTENSION_SEPARATOR;

    /**
     * The Unix separator character.
     */
    private static readonly UNIX_NAME_SEPARATOR = '/';

    /**
     * The Windows separator character.
     */
    private static readonly WINDOWS_NAME_SEPARATOR = '\\';

    /**
     * The system separator character.
     */
    private static readonly SYSTEM_NAME_SEPARATOR: string = FilenameUtils.UNIX_NAME_SEPARATOR;

    /**
     * The separator character that is the opposite of the system separator.
     */
    private static readonly OTHER_SEPARATOR = FilenameUtils.flipSeparator(FilenameUtils.SYSTEM_NAME_SEPARATOR);

    private static readonly IPV4_PATTERN = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

    private static readonly IPV4_MAX_OCTET_VALUE = 255;

    private static readonly IPV6_MAX_HEX_GROUPS = 8;

    private static readonly IPV6_MAX_HEX_DIGITS_PER_GROUP = 4;

    private static readonly MAX_UNSIGNED_SHORT = 0xffff;

    private static readonly BASE_16 = 16;

    private static readonly REG_NAME_PART_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;

    /**
     * Concatenates a fileName to a base path using normal command line style rules.
     * <p>
     * The effect is equivalent to resultant directory after changing
     * directory to the first argument, followed by changing directory to
     * the second argument.
     * </p>
     * <p>
     * The first argument is the base path, the second is the path to concatenate.
     * The returned path is always normalized via {@link #normalize(String)},
     * thus {@code ..} is handled.
     * </p>
     * <p>
     * If {@code pathToAdd} is absolute (has an absolute prefix), then
     * it will be normalized and returned.
     * Otherwise, the paths will be joined, normalized and returned.
     * </p>
     * <p>
     * The output will be the same on both Unix and Windows except
     * for the separator character.
     * </p>
     * <pre>
     * /foo/      + bar        --&gt;  /foo/bar
     * /foo       + bar        --&gt;  /foo/bar
     * /foo       + /bar       --&gt;  /bar
     * /foo       + C:/bar     --&gt;  C:/bar
     * /foo       + C:bar      --&gt;  C:bar [1]
     * /foo/a/    + ../bar     --&gt;  /foo/bar
     * /foo/      + ../../bar  --&gt;  null
     * /foo/      + /bar       --&gt;  /bar
     * /foo/..    + /bar       --&gt;  /bar
     * /foo       + bar/c.txt  --&gt;  /foo/bar/c.txt
     * /foo/c.txt + bar        --&gt;  /foo/c.txt/bar [2]
     * </pre>
     * <p>
     * [1] Note that the Windows relative drive prefix is unreliable when
     * used with this method.
     * </p>
     * <p>
     * [2] Note that the first parameter must be a path. If it ends with a name, then
     * the name will be built into the concatenated path. If this might be a problem,
     * use {@link #getFullPath(String)} on the base path argument.
     * </p>
     *
     * @param basePath  the base path to attach to, always treated as a path
     * @param fullFileNameToAdd  the fileName (or path) to attach to the base
     * @return the concatenated path, or null if invalid.  Null bytes inside string will be removed
     */
    public static concat(basePath: string, fullFileNameToAdd: string): string {
        const prefix = FilenameUtils.getPrefixLength(fullFileNameToAdd);
        if (prefix < 0) {
            return null;
        }
        if (prefix > 0) {
            return FilenameUtils.normalize(fullFileNameToAdd);
        }
        if (basePath == null) {
            return null;
        }
        const len = basePath.length;
        if (len === 0) {
            return FilenameUtils.normalize(fullFileNameToAdd);
        }
        const ch = basePath.charAt(len - 1);
        if (FilenameUtils.isSeparator(ch)) {
            return FilenameUtils.normalize(basePath + fullFileNameToAdd);
        }
        return FilenameUtils.normalize(`${basePath}/${fullFileNameToAdd}`);
    }

    /**
     * Determines whether the {@code parent} directory contains the {@code child} element (a file or directory).
     * <p>
     * The files names are expected to be normalized.
     * </p>
     *
     * Edge cases:
     * <ul>
     * <li>A {@code directory} must not be null: if null, throw IllegalArgumentException</li>
     * <li>A directory does not contain itself: return false</li>
     * <li>A null child file is not contained in any parent: return false</li>
     * </ul>
     *
     * @param canonicalParent
     *            the file to consider as the parent.
     * @param canonicalChild
     *            the file to consider as the child.
     * @return true is the candidate leaf is under by the specified composite. False otherwise.
     * @since 2.2
     * @see FileUtils#directoryContains(File, File)
     */
    public static directoryContains(canonicalParent: string, canonicalChild: string): boolean {
        if (FilenameUtils.isEmpty(canonicalParent) || FilenameUtils.isEmpty(canonicalChild)) {
            return false;
        }

        if (canonicalParent === canonicalChild) {
            return false;
        }

        const separator = FilenameUtils.toSeparator(canonicalParent.charAt(0) === FilenameUtils.UNIX_NAME_SEPARATOR);
        const parentWithEndSeparator = canonicalParent.charAt(canonicalParent.length - 1) === separator ? canonicalParent : canonicalParent + separator;

        return canonicalChild.startsWith(parentWithEndSeparator);
    }

    /**
     * Does the work of getting the path.
     *
     * @param fileName  the fileName
     * @param includeSeparator  true to include the end separator
     * @return the path
     */
    private static doGetFullPath(fileName: string, includeSeparator: boolean): string {
        if (fileName === null) {
            return null;
        }
        const prefix = FilenameUtils.getPrefixLength(fileName);
        if (prefix < 0) {
            return null;
        }
        if (prefix >= fileName.length) {
            if (includeSeparator) {
                return FilenameUtils.getPrefix(fileName);  // add end slash if necessary
            }
            return fileName;
        }
        const index = FilenameUtils.indexOfLastSeparator(fileName);
        if (index < 0) {
            return fileName.substring(0, prefix);
        }
        let end = index + (includeSeparator ?  1 : 0);
        if (end === 0) {
            end++;
        }
        return fileName.substring(0, end);
    }

    /**
     * Does the work of getting the path.
     *
     * @param fileName  the fileName
     * @param separatorAdd  0 to omit the end separator, 1 to return it
     * @return the path. Null bytes inside string will be removed
     */
    private static doGetPath(fileName: string, separatorAdd: number): string {
        if (fileName === null) {
            return null;
        }
        const prefix = FilenameUtils.getPrefixLength(fileName);
        if (prefix < 0) {
            return null;
        }
        const index = FilenameUtils.indexOfLastSeparator(fileName);
        const endIndex = index + separatorAdd;
        if (prefix >= fileName.length || index < 0 || prefix >= endIndex) {
            return FilenameUtils.EMPTY_STRING;
        }
        return FilenameUtils.requireNonNullChars(fileName.substring(prefix, endIndex));
    }

    /**
     * Internal method to perform the normalization.
     *
     * @param fileName  the fileName
     * @param separator The separator character to use
     * @param keepSeparator  true to keep the final separator
     * @return the normalized fileName. Null bytes inside string will be removed.
     */
    // tslint:disable-next-line:cyclomatic-complexity
    private static doNormalize(fileName: string, separator: string, keepSeparator: boolean): string {
        if (fileName === null) {
            return null;
        }

        FilenameUtils.requireNonNullChars(fileName);

        let size = fileName.length;
        if (size === 0) {
            return fileName;
        }
        const prefix = FilenameUtils.getPrefixLength(fileName);
        if (prefix < 0) {
            return null;
        }

        const array = [ ...fileName.split(''), '\0', '\0' ];

        // fix separators throughout
        const otherSeparator = FilenameUtils.flipSeparator(separator);
        for (let i = 0; i < array.length; i++) {
            if (array[i] === otherSeparator) {
                array[i] = separator;
            }
        }

        // add extra separator on the end to simplify code below
        let lastIsDirectory = true;
        if (array[size - 1] !== separator) {
            array[size++] = separator;
            lastIsDirectory = false;
        }

        const arraycopy = (src: any[], srcIndex: number, dest: any[], destIndex: number, count: number): void => {
            // tslint:disable-next-line:ban-comma-operator
            for (let i = srcIndex, j = destIndex, n = 0; n < count; i++, j++, n++) {
                dest[j] = src[i];
            }
        };

        // adjoining slashes
        // If we get here, prefix can only be 0 or greater, size 1 or greater
        // If prefix is 0, set loop start to 1 to prevent index errors
        for (let i = (prefix !== 0) ? prefix : 1; i < size; i++) {
            if (array[i] === separator && array[i - 1] === separator) {
                arraycopy(array, i, array, i - 1, size - i);
                size--;
                i--;
            }
        }

        // dot slash
        for (let i = prefix + 1; i < size; i++) {
            if (array[i] === separator && array[i - 1] === '.' &&
                (i === prefix + 1 || array[i - 2] === separator)) {
                if (i === size - 1) {
                    lastIsDirectory = true;
                }
                arraycopy(array, i + 1, array, i - 1, size - i);
                size -= 2;
                i--;
            }
        }

        // double dot slash
        outer:
            for (let i = prefix + 2; i < size; i++) {
                if (array[i] === separator && array[i - 1] === '.' && array[i - 2] === '.' &&
                    (i === prefix + 2 || array[i - 3] === separator)) {
                    if (i === prefix + 2) {
                        return null;
                    }
                    if (i === size - 1) {
                        lastIsDirectory = true;
                    }
                    let j;
                    for (j = i - 4 ; j >= prefix; j--) {
                        if (array[j] === separator) {
                            // remove b/../ from a/b/../c
                            arraycopy(array, i + 1, array, j + 1, size - i);
                            size -= i - j;
                            i = j + 1;
                            continue outer;
                        }
                    }
                    // remove a/../ from a/../c
                    arraycopy(array, i + 1, array, prefix, size - i);
                    size -= i + 1 - prefix;
                    i = prefix + 1;
                }
            }

        if (size <= 0) {  // should never be less than 0
            return FilenameUtils.EMPTY_STRING;
        }
        if (size <= prefix) {  // should never be less than prefix
            return array.slice(0, size).join('');
        }
        if (lastIsDirectory && keepSeparator) {
            return array.slice(0, size).join('');  // keep trailing separator
        }
        return array.slice(0, size - 1).join('');  // lose trailing separator
    }

    /**
     * Checks whether two fileNames are equal, optionally normalizing and providing
     * control over the case-sensitivity.
     *
     * @param fileName1  the first fileName to query, may be null
     * @param fileName2  the second fileName to query, may be null
     * @param normalized  whether to normalize the fileNames
     * @return true if the fileNames are equal, null equals null
     * @since 1.3
     */
    public static equals(fileName1: string, fileName2: string, normalized = false): boolean {
        if (fileName1 === null || fileName2 === null) {
            return fileName1 === null && fileName2 === null;
        }
        if (normalized) {
            fileName1 = FilenameUtils.normalize(fileName1);
            if (fileName1 == null) {
                return false;
            }
            fileName2 = FilenameUtils.normalize(fileName2);
            if (fileName2 == null) {
                return false;
            }
        }
        return fileName1 === fileName2;
    }

    /**
     * Checks whether two fileNames are equal after both have been normalized.
     * <p>
     * Both fileNames are first passed to {@link #normalize(String)}.
     * The check is then performed in a case-sensitive manner.
     * </p>
     *
     * @param fileName1  the first fileName to query, may be null
     * @param fileName2  the second fileName to query, may be null
     * @return true if the fileNames are equal, null equals null
     */
    public static equalsNormalized(fileName1: string, fileName2: string): boolean {
        return FilenameUtils.equals(fileName1, fileName2, true);
    }

    /**
     * Checks whether two fileNames are equal after both have been normalized
     * and using the case rules of the system.
     * <p>
     * Both fileNames are first passed to {@link #normalize(String)}.
     * The check is then performed case-sensitive on Unix and
     * case-insensitive on Windows.
     * </p>
     *
     * @param fileName1  the first fileName to query, may be null
     * @param fileName2  the second fileName to query, may be null
     * @return true if the fileNames are equal, null equals null
     */
    public static equalsNormalizedOnSystem(fileName1: string, fileName2: string): boolean {
        return FilenameUtils.equals(fileName1, fileName2, true);
    }

    /**
     * Checks whether two fileNames are equal using the case rules of the system.
     * <p>
     * No processing is performed on the fileNames other than comparison.
     * The check is case-sensitive on Unix and case-insensitive on Windows.
     * </p>
     *
     * @param fileName1  the first fileName to query, may be null
     * @param fileName2  the second fileName to query, may be null
     * @return true if the fileNames are equal, null equals null
     */
    public static equalsOnSystem(fileName1: string, fileName2: string): boolean {
        return FilenameUtils.equals(fileName1, fileName2, false);
    }

    /**
     * Flips the Windows name separator to Linux and vice-versa.
     *
     * @param ch The Windows or Linux name separator.
     * @return The Windows or Linux name separator.
     */
    public static flipSeparator(ch: string): string {
        if (ch === FilenameUtils.UNIX_NAME_SEPARATOR) {
            return FilenameUtils.WINDOWS_NAME_SEPARATOR;
        }
        if (ch === FilenameUtils.WINDOWS_NAME_SEPARATOR) {
            return FilenameUtils.UNIX_NAME_SEPARATOR;
        }
        throw new Error(`Illegal argument: ${ch}`);
    }

    /**
     * Special handling for NTFS ADS: Don't accept colon in the fileName.
     *
     * @param fileName a file name
     * @return ADS offsets.
     */
    private static getAdsCriticalOffset(fileName: string): number {
        // Step 1: Remove leading path segments.
        const offset1 = fileName.lastIndexOf(FilenameUtils.SYSTEM_NAME_SEPARATOR);
        const offset2 = fileName.lastIndexOf(FilenameUtils.OTHER_SEPARATOR);
        if (offset1 === -1) {
            if (offset2 === -1) {
                return 0;
            }
            return offset2 + 1;
        }
        if (offset2 === -1) {
            return offset1 + 1;
        }
        return Math.max(offset1, offset2) + 1;
    }

    /**
     * Gets the base name, minus the full path and extension, from a full fileName.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The text after the last forward or backslash and before the last dot is returned.
     * </p>
     * <pre>
     * a/b/c.txt --&gt; c
     * a.txt     --&gt; a
     * a/b/c     --&gt; c
     * a/b/c/    --&gt; ""
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * </p>
     *
     * @param fileName  the fileName to query, null returns null
     * @return the name of the file without the path, or an empty string if none exists. Null bytes inside string
     * will be removed
     */
    public static getBaseName(fileName: string): string {
        return FilenameUtils.removeExtension(FilenameUtils.getName(fileName));
    }

    /**
     * Gets the extension of a fileName.
     * <p>
     * This method returns the textual part of the fileName after the last dot.
     * There must be no directory separator after the dot.
     * </p>
     * <pre>
     * foo.txt      --&gt; "txt"
     * a/b/c.jpg    --&gt; "jpg"
     * a/b.txt/c    --&gt; ""
     * a/b/c        --&gt; ""
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on, with the
     * exception of a possible {@link IllegalArgumentException} on Windows (see below).
     * </p>
     * <p>
     * <b>Note:</b> This method used to have a hidden problem for names like "foo.exe:bar.txt".
     * In this case, the name wouldn't be the name of a file, but the identifier of an
     * alternate data stream (bar.txt) on the file foo.exe. The method used to return
     * ".txt" here, which would be misleading. Commons IO 2.7, and later versions, are throwing
     * an {@link IllegalArgumentException} for names like this.
     * </p>
     *
     * @param fileName the fileName to retrieve the extension of.
     * @return the extension of the file or an empty string if none exists or {@code null}
     * if the fileName is {@code null}.
     * @throws IllegalArgumentException <b>Windows only:</b> The fileName parameter is, in fact,
     * the identifier of an Alternate Data Stream, for example "foo.exe:bar.txt".
     */
    public static getExtension(fileName: string): string {
        if (fileName === null) {
            return null;
        }
        const index = FilenameUtils.indexOfExtension(fileName);
        if (index === FilenameUtils.NOT_FOUND) {
            return FilenameUtils.EMPTY_STRING;
        }
        return fileName.substring(index + 1);
    }

    /**
     * Gets the full path from a full fileName, which is the prefix + path.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The method is entirely text based, and returns the text before and
     * including the last forward or backslash.
     * </p>
     * <pre>
     * C:\a\b\c.txt --&gt; C:\a\b\
     * ~/a/b/c.txt  --&gt; ~/a/b/
     * a.txt        --&gt; ""
     * a/b/c        --&gt; a/b/
     * a/b/c/       --&gt; a/b/c/
     * C:           --&gt; C:
     * C:\          --&gt; C:\
     * ~            --&gt; ~/
     * ~/           --&gt; ~/
     * ~user        --&gt; ~user/
     * ~user/       --&gt; ~user/
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * </p>
     *
     * @param fileName  the fileName to query, null returns null
     * @return the path of the file, an empty string if none exists, null if invalid
     */
    public static getFullPath(fileName: string): string {
        return FilenameUtils.doGetFullPath(fileName, true);
    }

    /**
     * Gets the full path from a full fileName, which is the prefix + path,
     * and also excluding the final directory separator.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The method is entirely text based, and returns the text before the
     * last forward or backslash.
     * </p>
     * <pre>
     * C:\a\b\c.txt --&gt; C:\a\b
     * ~/a/b/c.txt  --&gt; ~/a/b
     * a.txt        --&gt; ""
     * a/b/c        --&gt; a/b
     * a/b/c/       --&gt; a/b/c
     * C:           --&gt; C:
     * C:\          --&gt; C:\
     * ~            --&gt; ~
     * ~/           --&gt; ~
     * ~user        --&gt; ~user
     * ~user/       --&gt; ~user
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * </p>
     *
     * @param fileName  the fileName to query, null returns null
     * @return the path of the file, an empty string if none exists, null if invalid
     */
    public static getFullPathNoEndSeparator(fileName: string): string {
        return FilenameUtils.doGetFullPath(fileName, false);
    }

    /**
     * Gets the name minus the path from a full fileName.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The text after the last forward or backslash is returned.
     * </p>
     * <pre>
     * a/b/c.txt --&gt; c.txt
     * a.txt     --&gt; a.txt
     * a/b/c     --&gt; c
     * a/b/c/    --&gt; ""
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * </p>
     *
     * @param fileName  the fileName to query, null returns null
     * @return the name of the file without the path, or an empty string if none exists.
     * Null bytes inside string will be removed
     */
    public static getName(fileName: string): string {
        if (fileName === null) {
            return null;
        }
        return FilenameUtils.requireNonNullChars(fileName).substring(FilenameUtils.indexOfLastSeparator(fileName) + 1);
    }

    /**
     * Gets the path from a full fileName, which excludes the prefix.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The method is entirely text based, and returns the text before and
     * including the last forward or backslash.
     * </p>
     * <pre>
     * C:\a\b\c.txt --&gt; a\b\
     * ~/a/b/c.txt  --&gt; a/b/
     * a.txt        --&gt; ""
     * a/b/c        --&gt; a/b/
     * a/b/c/       --&gt; a/b/c/
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * </p>
     * <p>
     * This method drops the prefix from the result.
     * See {@link #getFullPath(String)} for the method that retains the prefix.
     * </p>
     *
     * @param fileName  the fileName to query, null returns null
     * @return the path of the file, an empty string if none exists, null if invalid.
     * Null bytes inside string will be removed
     */
    public static getPath(fileName: string): string {
        return FilenameUtils.doGetPath(fileName, 1);
    }

    /**
     * Gets the path from a full fileName, which excludes the prefix, and
     * also excluding the final directory separator.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The method is entirely text based, and returns the text before the
     * last forward or backslash.
     * </p>
     * <pre>
     * C:\a\b\c.txt --&gt; a\b
     * ~/a/b/c.txt  --&gt; a/b
     * a.txt        --&gt; ""
     * a/b/c        --&gt; a/b
     * a/b/c/       --&gt; a/b/c
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * </p>
     * <p>
     * This method drops the prefix from the result.
     * See {@link #getFullPathNoEndSeparator(String)} for the method that retains the prefix.
     * </p>
     *
     * @param fileName  the fileName to query, null returns null
     * @return the path of the file, an empty string if none exists, null if invalid.
     * Null bytes inside string will be removed
     */
    public static getPathNoEndSeparator(fileName: string): string {
        return FilenameUtils.doGetPath(fileName, 0);
    }

    /**
     * Gets the prefix from a full fileName, such as {@code C:/}
     * or {@code ~/}.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The prefix includes the first slash in the full fileName where applicable.
     * </p>
     * <pre>
     * Windows:
     * a\b\c.txt           --&gt; ""          --&gt; relative
     * \a\b\c.txt          --&gt; "\"         --&gt; current drive absolute
     * C:a\b\c.txt         --&gt; "C:"        --&gt; drive relative
     * C:\a\b\c.txt        --&gt; "C:\"       --&gt; absolute
     * \\server\a\b\c.txt  --&gt; "\\server\" --&gt; UNC
     *
     * Unix:
     * a/b/c.txt           --&gt; ""          --&gt; relative
     * /a/b/c.txt          --&gt; "/"         --&gt; absolute
     * ~/a/b/c.txt         --&gt; "~/"        --&gt; current user
     * ~                   --&gt; "~/"        --&gt; current user (slash added)
     * ~user/a/b/c.txt     --&gt; "~user/"    --&gt; named user
     * ~user               --&gt; "~user/"    --&gt; named user (slash added)
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * ie. both Unix and Windows prefixes are matched regardless.
     * </p>
     *
     * @param fileName  the fileName to query, null returns null
     * @return the prefix of the file, null if invalid. Null bytes inside string will be removed
     */
    public static getPrefix(fileName: string): string {
        if (fileName === null) {
            return null;
        }
        const len = FilenameUtils.getPrefixLength(fileName);
        if (len < 0) {
            return null;
        }
        if (len > fileName.length) {
            FilenameUtils.requireNonNullChars(fileName);
            return fileName + FilenameUtils.UNIX_NAME_SEPARATOR;
        }
        return FilenameUtils.requireNonNullChars(fileName.substring(0, len));
    }

    /**
     * Returns the length of the fileName prefix, such as {@code C:/} or {@code ~/}.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * </p>
     * <p>
     * The prefix length includes the first slash in the full fileName
     * if applicable. Thus, it is possible that the length returned is greater
     * than the length of the input string.
     * </p>
     * <pre>
     * Windows:
     * a\b\c.txt           --&gt; 0           --&gt; relative
     * \a\b\c.txt          --&gt; 1           --&gt; current drive absolute
     * C:a\b\c.txt         --&gt; 2           --&gt; drive relative
     * C:\a\b\c.txt        --&gt; 3           --&gt; absolute
     * \\server\a\b\c.txt  --&gt; 9           --&gt; UNC
     * \\\a\b\c.txt        --&gt; -1          --&gt; error
     *
     * Unix:
     * a/b/c.txt           --&gt; 0           --&gt; relative
     * /a/b/c.txt          --&gt; 1           --&gt; absolute
     * ~/a/b/c.txt         --&gt; 2           --&gt; current user
     * ~                   --&gt; 2           --&gt; current user (slash added)
     * ~user/a/b/c.txt     --&gt; 6           --&gt; named user
     * ~user               --&gt; 6           --&gt; named user (slash added)
     * //server/a/b/c.txt  --&gt; 9
     * ///a/b/c.txt        --&gt; -1          --&gt; error
     * C:                  --&gt; 0           --&gt; valid filename as only null byte and / are reserved characters
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     * ie. both Unix and Windows prefixes are matched regardless.
     * </p>
     * <p>
     * Note that a leading // (or \\) is used to indicate a UNC name on Windows.
     * These must be followed by a server name, so double-slashes are not collapsed
     * to a single slash at the start of the fileName.
     * </p>
     *
     * @param fileName  the fileName to find the prefix in, null returns -1
     * @return the length of the prefix, -1 if invalid or null
     */
    // tslint:disable-next-line:cyclomatic-complexity
    public static getPrefixLength(fileName: string): number {
        if (fileName == null) {
            return FilenameUtils.NOT_FOUND;
        }
        const len = fileName.length;
        if (len === 0) {
            return 0;
        }
        let ch0 = fileName.charAt(0);
        if (ch0 === ':') {
            return FilenameUtils.NOT_FOUND;
        }
        if (len === 1) {
            if (ch0 === '~') {
                return 2;  // return a length greater than the input
            }
            return FilenameUtils.isSeparator(ch0) ? 1 : 0;
        }
        if (ch0 === '~') {
            let posUnix = fileName.indexOf(FilenameUtils.UNIX_NAME_SEPARATOR, 1);
            let posWin = fileName.indexOf(FilenameUtils.WINDOWS_NAME_SEPARATOR, 1);
            if (posUnix === FilenameUtils.NOT_FOUND && posWin === FilenameUtils.NOT_FOUND) {
                return len + 1;  // return a length greater than the input
            }
            posUnix = posUnix === FilenameUtils.NOT_FOUND ? posWin : posUnix;
            posWin = posWin === FilenameUtils.NOT_FOUND ? posUnix : posWin;
            return Math.min(posUnix, posWin) + 1;
        }
        const ch1 = fileName.charAt(1);
        if (ch1 === ':') {
            ch0 = ch0.toUpperCase();
            if (ch0 >= 'A' && ch0 <= 'Z') {
                if (len === 2) {
                    return 0;
                }
                return 3;
            }
            if (ch0 === FilenameUtils.UNIX_NAME_SEPARATOR) {
                return 1;
            }
            return FilenameUtils.NOT_FOUND;

        }
        if (!FilenameUtils.isSeparator(ch0) || !FilenameUtils.isSeparator(ch1)) {
            return FilenameUtils.isSeparator(ch0) ? 1 : 0;
        }
        let posUnix = fileName.indexOf(FilenameUtils.UNIX_NAME_SEPARATOR, 2);
        let posWin = fileName.indexOf(FilenameUtils.WINDOWS_NAME_SEPARATOR, 2);
        if (posUnix === FilenameUtils.NOT_FOUND && posWin === FilenameUtils.NOT_FOUND || posUnix === 2 || posWin === 2) {
            return FilenameUtils.NOT_FOUND;
        }
        posUnix = posUnix === FilenameUtils.NOT_FOUND ? posWin : posUnix;
        posWin = posWin === FilenameUtils.NOT_FOUND ? posUnix : posWin;
        const pos = Math.min(posUnix, posWin) + 1;
        const hostnamePart = fileName.substring(2, pos - 1);
        return FilenameUtils.isValidHostName(hostnamePart) ? pos : FilenameUtils.NOT_FOUND;
    }

    /**
     * Returns the index of the last extension separator character, which is a dot.
     * <p>
     * This method also checks that there is no directory separator after the last dot. To do this it uses
     * {@link #indexOfLastSeparator(String)} which will handle a file in either Unix or Windows format.
     * </p>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on, with the
     * exception of a possible {@link IllegalArgumentException} on Windows (see below).
     * </p>
     * <b>Note:</b> This method used to have a hidden problem for names like "foo.exe:bar.txt".
     * In this case, the name wouldn't be the name of a file, but the identifier of an
     * alternate data stream (bar.txt) on the file foo.exe. The method used to return
     * ".txt" here, which would be misleading. Commons IO 2.7, and later versions, are throwing
     * an {@link IllegalArgumentException} for names like this.
     *
     * @param fileName
     *            the fileName to find the last extension separator in, null returns -1
     * @return the index of the last extension separator character, or -1 if there is no such character
     * @throws IllegalArgumentException <b>Windows only:</b> The fileName parameter is, in fact,
     * the identifier of an Alternate Data Stream, for example "foo.exe:bar.txt".
     */
    public static indexOfExtension(fileName: string): number {
        if (fileName === null) {
            return FilenameUtils.NOT_FOUND;
        }

        const extensionPos = fileName.lastIndexOf(FilenameUtils.EXTENSION_SEPARATOR);
        const lastSeparator = FilenameUtils.indexOfLastSeparator(fileName);
        return lastSeparator > extensionPos ? FilenameUtils.NOT_FOUND : extensionPos;
    }

    /**
     * Returns the index of the last directory separator character.
     * <p>
     * This method will handle a file in either Unix or Windows format.
     * The position of the last forward or backslash is returned.
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     *
     * @param fileName  the fileName to find the last path separator in, null returns -1
     * @return the index of the last separator character, or -1 if there
     * is no such character
     */
    public static indexOfLastSeparator(fileName: string): number {
        if (fileName === null) {
            return FilenameUtils.NOT_FOUND;
        }
        if (FilenameUtils.isSystemWindows()) {
            // Special handling for NTFS ADS: Don't accept colon in the fileName.
            const offset = fileName.indexOf(':', FilenameUtils.getAdsCriticalOffset(fileName));
            if (offset !== -1) {
                throw new Error('NTFS ADS separator (":") in file name is forbidden.');
            }
        }
        const lastUnixPos = fileName.lastIndexOf(FilenameUtils.UNIX_NAME_SEPARATOR);
        const lastWindowsPos = fileName.lastIndexOf(FilenameUtils.WINDOWS_NAME_SEPARATOR);
        return Math.max(lastUnixPos, lastWindowsPos);
    }

    private static isEmpty(s: string): boolean {
        return s === null || s === '';
    }

    /**
     * Checks whether the extension of the fileName is one of those specified.
     * <p>
     * This method obtains the extension as the textual part of the fileName
     * after the last dot. There must be no directory separator after the dot.
     * The extension check is case-sensitive on all platforms.
     *
     * @param fileName  the fileName to query, null returns false
     * @param extensions  the extensions to check for, null checks for no extension
     * @return true if the fileName is one of the extensions
     * @throws java.lang.IllegalArgumentException if the supplied fileName contains null bytes
     */
    public static isExtension(fileName: string, extensions: string[]): boolean;

    /**
     * Checks whether the extension of the fileName is that specified.
     * <p>
     * This method obtains the extension as the textual part of the fileName
     * after the last dot. There must be no directory separator after the dot.
     * The extension check is case-sensitive on all platforms.
     *
     * @param fileName  the fileName to query, null returns false
     * @param extension  the extension to check for, null or empty checks for no extension
     * @return true if the fileName has the specified extension
     * @throws java.lang.IllegalArgumentException if the supplied fileName contains null bytes
     */
    // tslint:disable-next-line:unified-signatures
    public static isExtension(fileName: string, extension: string): boolean;

    /**
     * Checks whether the extension of the fileName is one of those specified.
     * <p>
     * This method obtains the extension as the textual part of the fileName
     * after the last dot. There must be no directory separator after the dot.
     * The extension check is case-sensitive on all platforms.
     *
     * @param fileName  the fileName to query, null returns false
     * @param extensions  the extensions to check for, null checks for no extension
     * @return true if the fileName is one of the extensions
     * @throws java.lang.IllegalArgumentException if the supplied fileName contains null bytes
     */
    public static isExtension(fileName: string, ...extensions: string[]): boolean;

    public static isExtension(fileName: string, extensions: string | string[]): boolean {
        if (fileName === null) {
            return false;
        }
        FilenameUtils.requireNonNullChars(fileName);

        if (Array.isArray(extensions)) {
            if (extensions === null || extensions.length === 0) {
                return FilenameUtils.indexOfExtension(fileName) === FilenameUtils.NOT_FOUND;
            }
            const fileExt = FilenameUtils.getExtension(fileName);
            for (const extension of extensions) {
                if (fileExt === extension) {
                    return true;
                }
            }
            return false;
        } else {
            if (FilenameUtils.isEmpty(extensions)) {
                return FilenameUtils.indexOfExtension(fileName) === FilenameUtils.NOT_FOUND;
            }
            return FilenameUtils.getExtension(fileName) === extensions;
        }
    }

    /**
     * Checks whether a given string represents a valid IPv4 address.
     *
     * @param name the name to validate
     * @return true if the given name is a valid IPv4 address
     */
    // mostly copied from org.apache.commons.validator.routines.InetAddressValidator#isValidInet4Address
    private static isIPv4Address(name: string): boolean {
        const m = FilenameUtils.IPV4_PATTERN.exec(name);
        if (m?.length !== 5) {
            return false;
        }

        // verify that address subgroups are legal
        for (let i = 1; i <= 4; i++) {
            const ipSegment = m[i];
            const iIpSegment = parseInt(ipSegment, 10);
            if (iIpSegment > FilenameUtils.IPV4_MAX_OCTET_VALUE) {
                return false;
            }

            if (ipSegment.length > 1 && ipSegment.startsWith('0')) {
                return false;
            }
        }

        return true;
    }

    // copied from org.apache.commons.validator.routines.InetAddressValidator#isValidInet6Address
    /**
     * Checks whether a given string represents a valid IPv6 address.
     *
     * @param inet6Address the name to validate
     * @return true if the given name is a valid IPv6 address
     */
    // tslint:disable-next-line:cyclomatic-complexity
    private static isIPv6Address(inet6Address: string): boolean {
        const containsCompressedZeroes = inet6Address.includes('::');
        if (containsCompressedZeroes && (inet6Address.indexOf('::') !== inet6Address.lastIndexOf('::'))) {
            return false;
        }
        if ((inet6Address.startsWith(':') && !inet6Address.startsWith('::'))
            || (inet6Address.endsWith(':') && !inet6Address.endsWith('::'))) {
            return false;
        }
        let octets = inet6Address.split(':');
        if (containsCompressedZeroes) {
            let octetList = [ ...octets ];
            if (inet6Address.endsWith('::')) {
                // String.split() drops ending empty segments
                octetList.push('');
            } else if (inet6Address.startsWith('::') && octetList.length > 0) {
                octetList = octetList.splice(1);
            }
            octets = [ ...octetList ];
        }
        if (octets.length > FilenameUtils.IPV6_MAX_HEX_GROUPS) {
            return false;
        }
        let validOctets = 0;
        let emptyOctets = 0; // consecutive empty chunks
        for (let index = 0; index < octets.length; index++) {
            const octet = octets[index];
            if (octet === '') {
                emptyOctets++;
                if (emptyOctets > 1) {
                    return false;
                }
            } else {
                emptyOctets = 0;
                // Is last chunk an IPv4 address?
                if (index === octets.length - 1 && octet.includes('.')) {
                    if (!FilenameUtils.isIPv4Address(octet)) {
                        return false;
                    }
                    validOctets += 2;
                    continue;
                }
                if (octet.length > FilenameUtils.IPV6_MAX_HEX_DIGITS_PER_GROUP) {
                    return false;
                }
                let octetInt;
                try {
                    octetInt = parseInt(octet, 16);
                } catch (e) {
                    return false;
                }
                if (octetInt < 0 || octetInt > FilenameUtils.MAX_UNSIGNED_SHORT) {
                    return false;
                }
            }
            validOctets++;
        }
        return validOctets <= FilenameUtils.IPV6_MAX_HEX_GROUPS && (validOctets >= FilenameUtils.IPV6_MAX_HEX_GROUPS || containsCompressedZeroes);
    }

    /**
     * Checks whether a given string is a valid host name according to
     * RFC 3986 - not accepting IP addresses.
     *
     * @see "https://tools.ietf.org/html/rfc3986#section-3.2.2"
     * @param name the hostname to validate
     * @return true if the given name is a valid host name
     */
    private static isRFC3986HostName(name: string): boolean {
        const parts = name.split('.');
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === '') {
                // trailing dot is legal, otherwise we've hit a .. sequence
                return i === parts.length - 1;
            }
            if (!FilenameUtils.REG_NAME_PART_PATTERN.test(parts[i])) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if the character is a separator.
     *
     * @param ch  the character to check
     * @return true if it is a separator character
     */
    private static isSeparator(ch: string): boolean {
        return ch === FilenameUtils.UNIX_NAME_SEPARATOR || ch === FilenameUtils.WINDOWS_NAME_SEPARATOR;
    }

    /**
     * Determines if Windows file system is in use.
     *
     * @return true if the system is Windows
     */
    protected static isSystemWindows(): boolean {
        return FilenameUtils.SYSTEM_NAME_SEPARATOR === FilenameUtils.WINDOWS_NAME_SEPARATOR;
    }

    /**
     * Checks whether a given string is a valid host name according to
     * RFC 3986.
     *
     * <p>Accepted are IP addresses (v4 and v6) as well as what the
     * RFC calls a "reg-name". Percent encoded names don't seem to be
     * valid names in UNC paths.</p>
     *
     * @see "https://tools.ietf.org/html/rfc3986#section-3.2.2"
     * @param name the hostname to validate
     * @return true if the given name is a valid host name
     */
    private static isValidHostName(name: string): boolean {
        return FilenameUtils.isIPv6Address(name) || FilenameUtils.isRFC3986HostName(name);
    }

    /**
     * Normalizes a path, removing double and single dot path steps.
     * <p>
     * This method normalizes a path to a standard format.
     * The input may contain separators in either Unix or Windows format.
     * The output will contain separators in the format specified.
     * <p>
     * A trailing slash will be retained.
     * A double slash will be merged to a single slash (but UNC names are handled).
     * A single dot path segment will be removed.
     * A double dot will cause that path segment and the one before to be removed.
     * If the double dot has no parent path segment to work with, {@code null}
     * is returned.
     * <p>
     * The output will be the same on both Unix and Windows except
     * for the separator character.
     * <pre>
     * /foo//               --&gt;   /foo/
     * /foo/./              --&gt;   /foo/
     * /foo/../bar          --&gt;   /bar
     * /foo/../bar/         --&gt;   /bar/
     * /foo/../bar/../baz   --&gt;   /baz
     * //foo//./bar         --&gt;   /foo/bar
     * /../                 --&gt;   null
     * ../foo               --&gt;   null
     * foo/bar/..           --&gt;   foo/
     * foo/../../bar        --&gt;   null
     * foo/../bar           --&gt;   bar
     * //server/foo/../bar  --&gt;   //server/bar
     * //server/../bar      --&gt;   null
     * C:\foo\..\bar        --&gt;   C:\bar
     * C:\..\bar            --&gt;   null
     * ~/foo/../bar/        --&gt;   ~/bar/
     * ~/../bar             --&gt;   null
     * </pre>
     * The output will be the same on both Unix and Windows including
     * the separator character.
     *
     * @param fileName  the fileName to normalize, null returns null
     * @param unixSeparator {@code true} if a unix separator should
     * be used or {@code false} if a windows separator should be used.
     * @return the normalized fileName, or null if invalid. Null bytes inside string will be removed
     * @since 2.0
     */
    public static normalize(fileName: string, unixSeparator?: boolean): string {
        if (unixSeparator !== undefined) {
            return FilenameUtils.doNormalize(fileName, FilenameUtils.toSeparator(unixSeparator), true);
        } else {
            return FilenameUtils.doNormalize(fileName, FilenameUtils.SYSTEM_NAME_SEPARATOR, true);
        }
    }

    /**
     * Normalizes a path, removing double and single dot path steps,
     * and removing any final directory separator.
     * <p>
     * This method normalizes a path to a standard format.
     * The input may contain separators in either Unix or Windows format.
     * The output will contain separators in the format specified.
     * <p>
     * A trailing slash will be removed.
     * A double slash will be merged to a single slash (but UNC names are handled).
     * A single dot path segment will be removed.
     * A double dot will cause that path segment and the one before to be removed.
     * If the double dot has no parent path segment to work with, {@code null}
     * is returned.
     * <p>
     * The output will be the same on both Unix and Windows including
     * the separator character.
     * <pre>
     * /foo//               --&gt;   /foo
     * /foo/./              --&gt;   /foo
     * /foo/../bar          --&gt;   /bar
     * /foo/../bar/         --&gt;   /bar
     * /foo/../bar/../baz   --&gt;   /baz
     * //foo//./bar         --&gt;   /foo/bar
     * /../                 --&gt;   null
     * ../foo               --&gt;   null
     * foo/bar/..           --&gt;   foo
     * foo/../../bar        --&gt;   null
     * foo/../bar           --&gt;   bar
     * //server/foo/../bar  --&gt;   //server/bar
     * //server/../bar      --&gt;   null
     * C:\foo\..\bar        --&gt;   C:\bar
     * C:\..\bar            --&gt;   null
     * ~/foo/../bar/        --&gt;   ~/bar
     * ~/../bar             --&gt;   null
     * </pre>
     *
     * @param fileName  the fileName to normalize, null returns null
     * @param unixSeparator {@code true} if a unix separator should
     * be used or {@code false} if a windows separator should be used.
     * @return the normalized fileName, or null if invalid. Null bytes inside string will be removed
     * @since 2.0
     */
    public static normalizeNoEndSeparator(fileName: string, unixSeparator?: boolean): string {
        if (unixSeparator !== undefined) {
            return FilenameUtils.doNormalize(fileName, FilenameUtils.toSeparator(unixSeparator), false);
        } else {
            return FilenameUtils.doNormalize(fileName, FilenameUtils.SYSTEM_NAME_SEPARATOR, false);
        }
    }

    /**
     * Removes the extension from a fileName.
     * <p>
     * This method returns the textual part of the fileName before the last dot.
     * There must be no directory separator after the dot.
     * <pre>
     * foo.txt    --&gt; foo
     * a\b\c.jpg  --&gt; a\b\c
     * a\b\c      --&gt; a\b\c
     * a.b\c      --&gt; a.b\c
     * </pre>
     * <p>
     * The output will be the same irrespective of the machine that the code is running on.
     *
     * @param fileName  the fileName to query, null returns null
     * @return the fileName minus the extension
     */
    public static removeExtension(fileName: string): string {
        if (fileName === null) {
            return null;
        }
        FilenameUtils.requireNonNullChars(fileName);

        const index = FilenameUtils.indexOfExtension(fileName);
        if (index === FilenameUtils.NOT_FOUND) {
            return fileName;
        }
        return fileName.substring(0, index);
    }

    /**
     * Checks the input for null bytes, a sign of unsanitized data being passed to to file level functions.
     *
     * This may be used for poison byte attacks.
     *
     * @param path the path to check
     * @return The input
     */
    private static requireNonNullChars(path: string): string {
        if (path.indexOf('\0') >= 0) {
            throw new Error(
                'Null byte present in file/path name. There are no known legitimate use cases for such data, but several injection attacks may use it');
        }
        return path;
    }

    /**
     * Converts all separators to the system separator.
     *
     * @param path the path to be changed, null ignored.
     * @return the updated path.
     */
    public static separatorsToSystem(path: string): string {
        return path.replace(/\\/g, '/');
        // return FileSystem.getCurrent().normalizeSeparators(path);
    }

    /**
     * Converts all separators to the Unix separator of forward slash.
     *
     * @param path the path to be changed, null ignored.
     * @return the new path.
     */
    public static separatorsToUnix(path: string): string {
        return path.replace(/\\/g, '/');
        // return FileSystem.LINUX.normalizeSeparators(path);
    }

    /**
     * Converts all separators to the Windows separator of backslash.
     *
     * @param path the path to be changed, null ignored.
     * @return the updated path.
     */
    public static separatorsToWindows(path: string): string {
        return path.replace(/\//g, '\\');
        // return FileSystem.WINDOWS.normalizeSeparators(path);
    }

    /**
     * Splits a string into a number of tokens.
     * The text is split by '?' and '*'.
     * Where multiple '*' occur consecutively they are collapsed into a single '*'.
     *
     * @param text  the text to split
     * @return the array of tokens, never null
     */
    protected static splitOnTokens(text: string): string[] {
        // used by wildcardMatch
        // package level so a unit test may run on this

        if (text.indexOf('?') === FilenameUtils.NOT_FOUND && text.indexOf('*') === FilenameUtils.NOT_FOUND) {
            return [ text ];
        }

        const array = text.split('');
        const list: string[] = [];
        let buffer = new StringBuilder('');
        let prevChar = '\0';
        for (const ch of array) {
            if (ch === '?' || ch === '*') {
                if (buffer.length !== 0) {
                    list.push(buffer.toString());
                    buffer = new StringBuilder('');
                }
                if (ch === '?') {
                    list.push('?');
                } else if (prevChar !== '*') {// ch == '*' here; check if previous char was '*'
                    list.push('*');
                }
            } else {
                buffer.append(ch);
            }
            prevChar = ch;
        }
        if (buffer.length !== 0) {
            list.push(buffer.toString());
        }

        return list;
    }

    /**
     * Returns '/' if given true, '\\' otherwise.
     *
     * @param unixSeparator which separator to return.
     * @return '/' if given true, '\\' otherwise.
     */
    private static toSeparator(unixSeparator: boolean): string {
        return unixSeparator ? FilenameUtils.UNIX_NAME_SEPARATOR : FilenameUtils.WINDOWS_NAME_SEPARATOR;
    }

    /**
     * Checks a fileName to see if it matches the specified wildcard matcher,
     * always testing case-sensitive.
     * <p>
     * The wildcard matcher uses the characters '?' and '*' to represent a
     * single or multiple (zero or more) wildcard characters.
     * This is the same as often found on DOS/Unix command lines.
     * The check is case-sensitive always.
     * <pre>
     * wildcardMatch("c.txt", "*.txt")      --&gt; true
     * wildcardMatch("c.txt", "*.jpg")      --&gt; false
     * wildcardMatch("a/b/c.txt", "a/b/*")  --&gt; true
     * wildcardMatch("c.txt", "*.???")      --&gt; true
     * wildcardMatch("c.txt", "*.????")     --&gt; false
     * </pre>
     * N.B. the sequence "*?" does not work properly at present in match strings.
     *
     * @param fileName  the fileName to match on
     * @param wildcardMatcher  the wildcard string to match against
     * @return true if the fileName matches the wildcard string
     */
    public static wildcardMatch(fileName: string, wildcardMatcher: string): boolean {
        if (fileName === null && wildcardMatcher === null) {
            return true;
        }
        if (fileName === null || wildcardMatcher === null) {
            return false;
        }
        const wcs = FilenameUtils.splitOnTokens(wildcardMatcher);
        let anyChars = false;
        let textIdx = 0;
        let wcsIdx = 0;
        const backtrack: [ number, number ][] = [];

        // loop around a backtrack stack, to handle complex * matching
        do {
            if (backtrack.length > 0) {
                [ wcsIdx, textIdx ] = backtrack.pop();
                anyChars = true;
            }

            // loop whilst tokens and text left to process
            while (wcsIdx < wcs.length) {
                if (wcs[wcsIdx] === '?') {
                    // ? so move to next text char
                    textIdx++;
                    if (textIdx > fileName.length) {
                        break;
                    }
                    anyChars = false;

                } else if (wcs[wcsIdx] === '*') {
                    // set any chars status
                    anyChars = true;
                    if (wcsIdx === wcs.length - 1) {
                        textIdx = fileName.length;
                    }

                } else {
                    // matching text token
                    if (anyChars) {
                        // any chars then try to locate text token
                        textIdx = fileName.indexOf(wcs[wcsIdx], textIdx);
                        if (textIdx === FilenameUtils.NOT_FOUND) {
                            // token not found
                            break;
                        }
                        const repeat = fileName.indexOf(wcs[wcsIdx], textIdx + 1);
                        if (repeat >= 0) {
                            backtrack.push([ wcsIdx, repeat ]);
                        }
                    } else if (fileName.substring(textIdx) !== wcs[wcsIdx]) {
                        // matching from current position
                        // couldn't match token
                        break;
                    }

                    // matched text token, move text index to end of matched token
                    textIdx += wcs[wcsIdx].length;
                    anyChars = false;
                }

                wcsIdx++;
            }

            // full match
            if (wcsIdx === wcs.length && textIdx === fileName.length) {
                return true;
            }

        } while (backtrack.length > 0);

        return false;
    }

    /**
     * Instances should NOT be constructed in standard programming.
     */
    private constructor() {
        // ignore
    }
}
