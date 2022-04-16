[2a](../README.md) / FilenameUtils

# Class: FilenameUtils

General file name and file path manipulation utilities.
<p>
When dealing with file names you can hit problems when moving from a Windows
based development machine to a Unix based production machine.
This class aims to help avoid those problems.
</p>
<p>
<b>NOTE</b>: You may be able to avoid using this class entirely simply by
using JDK {@link java.io.File File} objects and the two argument constructor
{@link java.io.File#File(java.io.File, java.lang.String) File(File,String)}.
</p>
<p>
Most methods on this class are designed to work the same on both Unix and Windows.
Those that don't include 'System', 'Unix' or 'Windows' in their name.
</p>
<p>
Most methods recognize both separators (forward and back), and both
sets of prefixes. See the Javadoc of each method for details.
</p>
<p>
This class defines six components within a file name
(example C:\dev\project\file.txt):
</p>
<ul>
<li>the prefix - C:\</li>
<li>the path - dev\project\</li>
<li>the full path - C:\dev\project\</li>
<li>the name - file.txt</li>
<li>the base name - file</li>
<li>the extension - txt</li>
</ul>
<p>
Note that this class works best if directory file names end with a separator.
If you omit the last separator, it is impossible to determine if the file name
corresponds to a file or a directory. As a result, we have chosen to say
it corresponds to a file.
</p>
<p>
This class only supports Unix and Windows style names.
Prefixes are matched as follows:
</p>
<pre>
Windows:
a\b\c.txt           --&gt; ""          --&gt; relative
\a\b\c.txt          --&gt; "\"         --&gt; current drive absolute
C:a\b\c.txt         --&gt; "C:"        --&gt; drive relative
C:\a\b\c.txt        --&gt; "C:\"       --&gt; absolute
\\server\a\b\c.txt  --&gt; "\\server\" --&gt; UNC

Unix:
a/b/c.txt           --&gt; ""          --&gt; relative
/a/b/c.txt          --&gt; "/"         --&gt; absolute
~/a/b/c.txt         --&gt; "~/"        --&gt; current user
~                   --&gt; "~/"        --&gt; current user (slash added)
~user/a/b/c.txt     --&gt; "~user/"    --&gt; named user
~user               --&gt; "~user/"    --&gt; named user (slash added)
</pre>
<p>
Both prefix styles are matched always, irrespective of the machine that you are
currently running on.
</p>
<p>
Origin of code: Excalibur, Alexandria, Tomcat, Commons-Utils.
</p>

**`since`** 1.1

## Table of contents

### Properties

- [EXTENSION\_SEPARATOR](FilenameUtils.md#extension_separator)
- [EXTENSION\_SEPARATOR\_STR](FilenameUtils.md#extension_separator_str)

### Methods

- [concat](FilenameUtils.md#concat)
- [directoryContains](FilenameUtils.md#directorycontains)
- [equals](FilenameUtils.md#equals)
- [equalsNormalized](FilenameUtils.md#equalsnormalized)
- [equalsNormalizedOnSystem](FilenameUtils.md#equalsnormalizedonsystem)
- [equalsOnSystem](FilenameUtils.md#equalsonsystem)
- [flipSeparator](FilenameUtils.md#flipseparator)
- [getBaseName](FilenameUtils.md#getbasename)
- [getExtension](FilenameUtils.md#getextension)
- [getFullPath](FilenameUtils.md#getfullpath)
- [getFullPathNoEndSeparator](FilenameUtils.md#getfullpathnoendseparator)
- [getName](FilenameUtils.md#getname)
- [getPath](FilenameUtils.md#getpath)
- [getPathNoEndSeparator](FilenameUtils.md#getpathnoendseparator)
- [getPrefix](FilenameUtils.md#getprefix)
- [getPrefixLength](FilenameUtils.md#getprefixlength)
- [indexOfExtension](FilenameUtils.md#indexofextension)
- [indexOfLastSeparator](FilenameUtils.md#indexoflastseparator)
- [isExtension](FilenameUtils.md#isextension)
- [normalize](FilenameUtils.md#normalize)
- [normalizeNoEndSeparator](FilenameUtils.md#normalizenoendseparator)
- [removeExtension](FilenameUtils.md#removeextension)
- [separatorsToSystem](FilenameUtils.md#separatorstosystem)
- [separatorsToUnix](FilenameUtils.md#separatorstounix)
- [separatorsToWindows](FilenameUtils.md#separatorstowindows)
- [wildcardMatch](FilenameUtils.md#wildcardmatch)

## Properties

### EXTENSION\_SEPARATOR

▪ `Static` `Readonly` **EXTENSION\_SEPARATOR**: ``"."``

The extension separator character.

**`since`** 1.4

#### Defined in

[src/FilenameUtils.ts:106](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L106)

___

### EXTENSION\_SEPARATOR\_STR

▪ `Static` `Readonly` **EXTENSION\_SEPARATOR\_STR**: ``"."``

The extension separator String.

**`since`** 1.4

#### Defined in

[src/FilenameUtils.ts:112](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L112)

## Methods

### concat

▸ `Static` **concat**(`basePath`, `fullFileNameToAdd`): `string`

Concatenates a fileName to a base path using normal command line style rules.
<p>
The effect is equivalent to resultant directory after changing
directory to the first argument, followed by changing directory to
the second argument.
</p>
<p>
The first argument is the base path, the second is the path to concatenate.
The returned path is always normalized via {@link #normalize(String)},
thus {@code ..} is handled.
</p>
<p>
If {@code pathToAdd} is absolute (has an absolute prefix), then
it will be normalized and returned.
Otherwise, the paths will be joined, normalized and returned.
</p>
<p>
The output will be the same on both Unix and Windows except
for the separator character.
</p>
<pre>
/foo/      + bar        --&gt;  /foo/bar
/foo       + bar        --&gt;  /foo/bar
/foo       + /bar       --&gt;  /bar
/foo       + C:/bar     --&gt;  C:/bar
/foo       + C:bar      --&gt;  C:bar [1]
/foo/a/    + ../bar     --&gt;  /foo/bar
/foo/      + ../../bar  --&gt;  null
/foo/      + /bar       --&gt;  /bar
/foo/..    + /bar       --&gt;  /bar
/foo       + bar/c.txt  --&gt;  /foo/bar/c.txt
/foo/c.txt + bar        --&gt;  /foo/c.txt/bar [2]
</pre>
<p>
[1] Note that the Windows relative drive prefix is unreliable when
used with this method.
</p>
<p>
[2] Note that the first parameter must be a path. If it ends with a name, then
the name will be built into the concatenated path. If this might be a problem,
use {@link #getFullPath(String)} on the base path argument.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath` | `string` | the base path to attach to, always treated as a path |
| `fullFileNameToAdd` | `string` | the fileName (or path) to attach to the base |

#### Returns

`string`

the concatenated path, or null if invalid.  Null bytes inside string will be removed

#### Defined in

[src/FilenameUtils.ts:196](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L196)

___

### directoryContains

▸ `Static` **directoryContains**(`canonicalParent`, `canonicalChild`): `boolean`

Determines whether the {@code parent} directory contains the {@code child} element (a file or directory).
<p>
The files names are expected to be normalized.
</p>

Edge cases:
<ul>
<li>A {@code directory} must not be null: if null, throw IllegalArgumentException</li>
<li>A directory does not contain itself: return false</li>
<li>A null child file is not contained in any parent: return false</li>
</ul>

**`since`** 2.2

**`see`** FileUtils#directoryContains(File, File)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canonicalParent` | `string` | the file to consider as the parent. |
| `canonicalChild` | `string` | the file to consider as the child. |

#### Returns

`boolean`

true is the candidate leaf is under by the specified composite. False otherwise.

#### Defined in

[src/FilenameUtils.ts:239](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L239)

___

### equals

▸ `Static` **equals**(`fileName1`, `fileName2`, `normalized?`): `boolean`

Checks whether two fileNames are equal, optionally normalizing and providing
control over the case-sensitivity.

**`since`** 1.3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName1` | `string` | `undefined` | the first fileName to query, may be null |
| `fileName2` | `string` | `undefined` | the second fileName to query, may be null |
| `normalized` | `boolean` | `false` | whether to normalize the fileNames |

#### Returns

`boolean`

true if the fileNames are equal, null equals null

#### Defined in

[src/FilenameUtils.ts:432](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L432)

___

### equalsNormalized

▸ `Static` **equalsNormalized**(`fileName1`, `fileName2`): `boolean`

Checks whether two fileNames are equal after both have been normalized.
<p>
Both fileNames are first passed to {@link #normalize(String)}.
The check is then performed in a case-sensitive manner.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName1` | `string` | the first fileName to query, may be null |
| `fileName2` | `string` | the second fileName to query, may be null |

#### Returns

`boolean`

true if the fileNames are equal, null equals null

#### Defined in

[src/FilenameUtils.ts:460](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L460)

___

### equalsNormalizedOnSystem

▸ `Static` **equalsNormalizedOnSystem**(`fileName1`, `fileName2`): `boolean`

Checks whether two fileNames are equal after both have been normalized
and using the case rules of the system.
<p>
Both fileNames are first passed to {@link #normalize(String)}.
The check is then performed case-sensitive on Unix and
case-insensitive on Windows.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName1` | `string` | the first fileName to query, may be null |
| `fileName2` | `string` | the second fileName to query, may be null |

#### Returns

`boolean`

true if the fileNames are equal, null equals null

#### Defined in

[src/FilenameUtils.ts:477](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L477)

___

### equalsOnSystem

▸ `Static` **equalsOnSystem**(`fileName1`, `fileName2`): `boolean`

Checks whether two fileNames are equal using the case rules of the system.
<p>
No processing is performed on the fileNames other than comparison.
The check is case-sensitive on Unix and case-insensitive on Windows.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName1` | `string` | the first fileName to query, may be null |
| `fileName2` | `string` | the second fileName to query, may be null |

#### Returns

`boolean`

true if the fileNames are equal, null equals null

#### Defined in

[src/FilenameUtils.ts:492](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L492)

___

### flipSeparator

▸ `Static` **flipSeparator**(`ch`): `string`

Flips the Windows name separator to Linux and vice-versa.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ch` | `string` | The Windows or Linux name separator. |

#### Returns

`string`

The Windows or Linux name separator.

#### Defined in

[src/FilenameUtils.ts:502](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L502)

___

### getBaseName

▸ `Static` **getBaseName**(`fileName`): `string`

Gets the base name, minus the full path and extension, from a full fileName.
<p>
This method will handle a file in either Unix or Windows format.
The text after the last forward or backslash and before the last dot is returned.
</p>
<pre>
a/b/c.txt --&gt; c
a.txt     --&gt; a
a/b/c     --&gt; c
a/b/c/    --&gt; ""
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the name of the file without the path, or an empty string if none exists. Null bytes inside string
will be removed

#### Defined in

[src/FilenameUtils.ts:554](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L554)

___

### getExtension

▸ `Static` **getExtension**(`fileName`): `string`

Gets the extension of a fileName.
<p>
This method returns the textual part of the fileName after the last dot.
There must be no directory separator after the dot.
</p>
<pre>
foo.txt      --&gt; "txt"
a/b/c.jpg    --&gt; "jpg"
a/b.txt/c    --&gt; ""
a/b/c        --&gt; ""
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on, with the
exception of a possible {@link IllegalArgumentException} on Windows (see below).
</p>
<p>
<b>Note:</b> This method used to have a hidden problem for names like "foo.exe:bar.txt".
In this case, the name wouldn't be the name of a file, but the identifier of an
alternate data stream (bar.txt) on the file foo.exe. The method used to return
".txt" here, which would be misleading. Commons IO 2.7, and later versions, are throwing
an {@link IllegalArgumentException} for names like this.
</p>

**`throws`** IllegalArgumentException <b>Windows only:</b> The fileName parameter is, in fact,
the identifier of an Alternate Data Stream, for example "foo.exe:bar.txt".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to retrieve the extension of. |

#### Returns

`string`

the extension of the file or an empty string if none exists or {@code null}
if the fileName is {@code null}.

#### Defined in

[src/FilenameUtils.ts:588](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L588)

___

### getFullPath

▸ `Static` **getFullPath**(`fileName`): `string`

Gets the full path from a full fileName, which is the prefix + path.
<p>
This method will handle a file in either Unix or Windows format.
The method is entirely text based, and returns the text before and
including the last forward or backslash.
</p>
<pre>
C:\a\b\c.txt --&gt; C:\a\b\
~/a/b/c.txt  --&gt; ~/a/b/
a.txt        --&gt; ""
a/b/c        --&gt; a/b/
a/b/c/       --&gt; a/b/c/
C:           --&gt; C:
C:\          --&gt; C:\
~            --&gt; ~/
~/           --&gt; ~/
~user        --&gt; ~user/
~user/       --&gt; ~user/
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the path of the file, an empty string if none exists, null if invalid

#### Defined in

[src/FilenameUtils.ts:626](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L626)

___

### getFullPathNoEndSeparator

▸ `Static` **getFullPathNoEndSeparator**(`fileName`): `string`

Gets the full path from a full fileName, which is the prefix + path,
and also excluding the final directory separator.
<p>
This method will handle a file in either Unix or Windows format.
The method is entirely text based, and returns the text before the
last forward or backslash.
</p>
<pre>
C:\a\b\c.txt --&gt; C:\a\b
~/a/b/c.txt  --&gt; ~/a/b
a.txt        --&gt; ""
a/b/c        --&gt; a/b
a/b/c/       --&gt; a/b/c
C:           --&gt; C:
C:\          --&gt; C:\
~            --&gt; ~
~/           --&gt; ~
~user        --&gt; ~user
~user/       --&gt; ~user
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the path of the file, an empty string if none exists, null if invalid

#### Defined in

[src/FilenameUtils.ts:658](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L658)

___

### getName

▸ `Static` **getName**(`fileName`): `string`

Gets the name minus the path from a full fileName.
<p>
This method will handle a file in either Unix or Windows format.
The text after the last forward or backslash is returned.
</p>
<pre>
a/b/c.txt --&gt; c.txt
a.txt     --&gt; a.txt
a/b/c     --&gt; c
a/b/c/    --&gt; ""
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the name of the file without the path, or an empty string if none exists.
Null bytes inside string will be removed

#### Defined in

[src/FilenameUtils.ts:682](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L682)

___

### getPath

▸ `Static` **getPath**(`fileName`): `string`

Gets the path from a full fileName, which excludes the prefix.
<p>
This method will handle a file in either Unix or Windows format.
The method is entirely text based, and returns the text before and
including the last forward or backslash.
</p>
<pre>
C:\a\b\c.txt --&gt; a\b\
~/a/b/c.txt  --&gt; a/b/
a.txt        --&gt; ""
a/b/c        --&gt; a/b/
a/b/c/       --&gt; a/b/c/
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
</p>
<p>
This method drops the prefix from the result.
See {@link #getFullPath(String)} for the method that retains the prefix.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the path of the file, an empty string if none exists, null if invalid.
Null bytes inside string will be removed

#### Defined in

[src/FilenameUtils.ts:715](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L715)

___

### getPathNoEndSeparator

▸ `Static` **getPathNoEndSeparator**(`fileName`): `string`

Gets the path from a full fileName, which excludes the prefix, and
also excluding the final directory separator.
<p>
This method will handle a file in either Unix or Windows format.
The method is entirely text based, and returns the text before the
last forward or backslash.
</p>
<pre>
C:\a\b\c.txt --&gt; a\b
~/a/b/c.txt  --&gt; a/b
a.txt        --&gt; ""
a/b/c        --&gt; a/b
a/b/c/       --&gt; a/b/c
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
</p>
<p>
This method drops the prefix from the result.
See {@link #getFullPathNoEndSeparator(String)} for the method that retains the prefix.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the path of the file, an empty string if none exists, null if invalid.
Null bytes inside string will be removed

#### Defined in

[src/FilenameUtils.ts:746](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L746)

___

### getPrefix

▸ `Static` **getPrefix**(`fileName`): `string`

Gets the prefix from a full fileName, such as {@code C:/}
or {@code ~/}.
<p>
This method will handle a file in either Unix or Windows format.
The prefix includes the first slash in the full fileName where applicable.
</p>
<pre>
Windows:
a\b\c.txt           --&gt; ""          --&gt; relative
\a\b\c.txt          --&gt; "\"         --&gt; current drive absolute
C:a\b\c.txt         --&gt; "C:"        --&gt; drive relative
C:\a\b\c.txt        --&gt; "C:\"       --&gt; absolute
\\server\a\b\c.txt  --&gt; "\\server\" --&gt; UNC

Unix:
a/b/c.txt           --&gt; ""          --&gt; relative
/a/b/c.txt          --&gt; "/"         --&gt; absolute
~/a/b/c.txt         --&gt; "~/"        --&gt; current user
~                   --&gt; "~/"        --&gt; current user (slash added)
~user/a/b/c.txt     --&gt; "~user/"    --&gt; named user
~user               --&gt; "~user/"    --&gt; named user (slash added)
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
ie. both Unix and Windows prefixes are matched regardless.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the prefix of the file, null if invalid. Null bytes inside string will be removed

#### Defined in

[src/FilenameUtils.ts:781](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L781)

___

### getPrefixLength

▸ `Static` **getPrefixLength**(`fileName`): `number`

Returns the length of the fileName prefix, such as {@code C:/} or {@code ~/}.
<p>
This method will handle a file in either Unix or Windows format.
</p>
<p>
The prefix length includes the first slash in the full fileName
if applicable. Thus, it is possible that the length returned is greater
than the length of the input string.
</p>
<pre>
Windows:
a\b\c.txt           --&gt; 0           --&gt; relative
\a\b\c.txt          --&gt; 1           --&gt; current drive absolute
C:a\b\c.txt         --&gt; 2           --&gt; drive relative
C:\a\b\c.txt        --&gt; 3           --&gt; absolute
\\server\a\b\c.txt  --&gt; 9           --&gt; UNC
\\\a\b\c.txt        --&gt; -1          --&gt; error

Unix:
a/b/c.txt           --&gt; 0           --&gt; relative
/a/b/c.txt          --&gt; 1           --&gt; absolute
~/a/b/c.txt         --&gt; 2           --&gt; current user
~                   --&gt; 2           --&gt; current user (slash added)
~user/a/b/c.txt     --&gt; 6           --&gt; named user
~user               --&gt; 6           --&gt; named user (slash added)
//server/a/b/c.txt  --&gt; 9
///a/b/c.txt        --&gt; -1          --&gt; error
C:                  --&gt; 0           --&gt; valid filename as only null byte and / are reserved characters
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.
ie. both Unix and Windows prefixes are matched regardless.
</p>
<p>
Note that a leading // (or \\) is used to indicate a UNC name on Windows.
These must be followed by a server name, so double-slashes are not collapsed
to a single slash at the start of the fileName.
</p>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to find the prefix in, null returns -1 |

#### Returns

`number`

the length of the prefix, -1 if invalid or null

#### Defined in

[src/FilenameUtils.ts:840](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L840)

___

### indexOfExtension

▸ `Static` **indexOfExtension**(`fileName`): `number`

Returns the index of the last extension separator character, which is a dot.
<p>
This method also checks that there is no directory separator after the last dot. To do this it uses
{@link #indexOfLastSeparator(String)} which will handle a file in either Unix or Windows format.
</p>
<p>
The output will be the same irrespective of the machine that the code is running on, with the
exception of a possible {@link IllegalArgumentException} on Windows (see below).
</p>
<b>Note:</b> This method used to have a hidden problem for names like "foo.exe:bar.txt".
In this case, the name wouldn't be the name of a file, but the identifier of an
alternate data stream (bar.txt) on the file foo.exe. The method used to return
".txt" here, which would be misleading. Commons IO 2.7, and later versions, are throwing
an {@link IllegalArgumentException} for names like this.

**`throws`** IllegalArgumentException <b>Windows only:</b> The fileName parameter is, in fact,
the identifier of an Alternate Data Stream, for example "foo.exe:bar.txt".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to find the last extension separator in, null returns -1 |

#### Returns

`number`

the index of the last extension separator character, or -1 if there is no such character

#### Defined in

[src/FilenameUtils.ts:920](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L920)

___

### indexOfLastSeparator

▸ `Static` **indexOfLastSeparator**(`fileName`): `number`

Returns the index of the last directory separator character.
<p>
This method will handle a file in either Unix or Windows format.
The position of the last forward or backslash is returned.
<p>
The output will be the same irrespective of the machine that the code is running on.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to find the last path separator in, null returns -1 |

#### Returns

`number`

the index of the last separator character, or -1 if there
is no such character

#### Defined in

[src/FilenameUtils.ts:942](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L942)

___

### isExtension

▸ `Static` **isExtension**(`fileName`, `extensions`): `boolean`

Checks whether the extension of the fileName is one of those specified.
<p>
This method obtains the extension as the textual part of the fileName
after the last dot. There must be no directory separator after the dot.
The extension check is case-sensitive on all platforms.

**`throws`** java.lang.IllegalArgumentException if the supplied fileName contains null bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns false |
| `extensions` | `string`[] | the extensions to check for, null checks for no extension |

#### Returns

`boolean`

true if the fileName is one of the extensions

#### Defined in

[src/FilenameUtils.ts:974](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L974)

▸ `Static` **isExtension**(`fileName`, `extension`): `boolean`

Checks whether the extension of the fileName is that specified.
<p>
This method obtains the extension as the textual part of the fileName
after the last dot. There must be no directory separator after the dot.
The extension check is case-sensitive on all platforms.

**`throws`** java.lang.IllegalArgumentException if the supplied fileName contains null bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns false |
| `extension` | `string` | the extension to check for, null or empty checks for no extension |

#### Returns

`boolean`

true if the fileName has the specified extension

#### Defined in

[src/FilenameUtils.ts:989](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L989)

▸ `Static` **isExtension**(`fileName`, ...`extensions`): `boolean`

Checks whether the extension of the fileName is one of those specified.
<p>
This method obtains the extension as the textual part of the fileName
after the last dot. There must be no directory separator after the dot.
The extension check is case-sensitive on all platforms.

**`throws`** java.lang.IllegalArgumentException if the supplied fileName contains null bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns false |
| `...extensions` | `string`[] | the extensions to check for, null checks for no extension |

#### Returns

`boolean`

true if the fileName is one of the extensions

#### Defined in

[src/FilenameUtils.ts:1003](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1003)

___

### normalize

▸ `Static` **normalize**(`fileName`, `unixSeparator?`): `string`

Normalizes a path, removing double and single dot path steps.
<p>
This method normalizes a path to a standard format.
The input may contain separators in either Unix or Windows format.
The output will contain separators in the format specified.
<p>
A trailing slash will be retained.
A double slash will be merged to a single slash (but UNC names are handled).
A single dot path segment will be removed.
A double dot will cause that path segment and the one before to be removed.
If the double dot has no parent path segment to work with, {@code null}
is returned.
<p>
The output will be the same on both Unix and Windows except
for the separator character.
<pre>
/foo//               --&gt;   /foo/
/foo/./              --&gt;   /foo/
/foo/../bar          --&gt;   /bar
/foo/../bar/         --&gt;   /bar/
/foo/../bar/../baz   --&gt;   /baz
//foo//./bar         --&gt;   /foo/bar
/../                 --&gt;   null
../foo               --&gt;   null
foo/bar/..           --&gt;   foo/
foo/../../bar        --&gt;   null
foo/../bar           --&gt;   bar
//server/foo/../bar  --&gt;   //server/bar
//server/../bar      --&gt;   null
C:\foo\..\bar        --&gt;   C:\bar
C:\..\bar            --&gt;   null
~/foo/../bar/        --&gt;   ~/bar/
~/../bar             --&gt;   null
</pre>
The output will be the same on both Unix and Windows including
the separator character.

**`since`** 2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to normalize, null returns null |
| `unixSeparator?` | `boolean` | {@code true} if a unix separator should be used or {@code false} if a windows separator should be used. |

#### Returns

`string`

the normalized fileName, or null if invalid. Null bytes inside string will be removed

#### Defined in

[src/FilenameUtils.ts:1229](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1229)

___

### normalizeNoEndSeparator

▸ `Static` **normalizeNoEndSeparator**(`fileName`, `unixSeparator?`): `string`

Normalizes a path, removing double and single dot path steps,
and removing any final directory separator.
<p>
This method normalizes a path to a standard format.
The input may contain separators in either Unix or Windows format.
The output will contain separators in the format specified.
<p>
A trailing slash will be removed.
A double slash will be merged to a single slash (but UNC names are handled).
A single dot path segment will be removed.
A double dot will cause that path segment and the one before to be removed.
If the double dot has no parent path segment to work with, {@code null}
is returned.
<p>
The output will be the same on both Unix and Windows including
the separator character.
<pre>
/foo//               --&gt;   /foo
/foo/./              --&gt;   /foo
/foo/../bar          --&gt;   /bar
/foo/../bar/         --&gt;   /bar
/foo/../bar/../baz   --&gt;   /baz
//foo//./bar         --&gt;   /foo/bar
/../                 --&gt;   null
../foo               --&gt;   null
foo/bar/..           --&gt;   foo
foo/../../bar        --&gt;   null
foo/../bar           --&gt;   bar
//server/foo/../bar  --&gt;   //server/bar
//server/../bar      --&gt;   null
C:\foo\..\bar        --&gt;   C:\bar
C:\..\bar            --&gt;   null
~/foo/../bar/        --&gt;   ~/bar
~/../bar             --&gt;   null
</pre>

**`since`** 2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to normalize, null returns null |
| `unixSeparator?` | `boolean` | {@code true} if a unix separator should be used or {@code false} if a windows separator should be used. |

#### Returns

`string`

the normalized fileName, or null if invalid. Null bytes inside string will be removed

#### Defined in

[src/FilenameUtils.ts:1280](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1280)

___

### removeExtension

▸ `Static` **removeExtension**(`fileName`): `string`

Removes the extension from a fileName.
<p>
This method returns the textual part of the fileName before the last dot.
There must be no directory separator after the dot.
<pre>
foo.txt    --&gt; foo
a\b\c.jpg  --&gt; a\b\c
a\b\c      --&gt; a\b\c
a.b\c      --&gt; a.b\c
</pre>
<p>
The output will be the same irrespective of the machine that the code is running on.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to query, null returns null |

#### Returns

`string`

the fileName minus the extension

#### Defined in

[src/FilenameUtils.ts:1305](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1305)

___

### separatorsToSystem

▸ `Static` **separatorsToSystem**(`path`): `string`

Converts all separators to the system separator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | the path to be changed, null ignored. |

#### Returns

`string`

the updated path.

#### Defined in

[src/FilenameUtils.ts:1340](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1340)

___

### separatorsToUnix

▸ `Static` **separatorsToUnix**(`path`): `string`

Converts all separators to the Unix separator of forward slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | the path to be changed, null ignored. |

#### Returns

`string`

the new path.

#### Defined in

[src/FilenameUtils.ts:1351](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1351)

___

### separatorsToWindows

▸ `Static` **separatorsToWindows**(`path`): `string`

Converts all separators to the Windows separator of backslash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | the path to be changed, null ignored. |

#### Returns

`string`

the updated path.

#### Defined in

[src/FilenameUtils.ts:1362](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1362)

___

### wildcardMatch

▸ `Static` **wildcardMatch**(`fileName`, `wildcardMatcher`): `boolean`

Checks a fileName to see if it matches the specified wildcard matcher,
always testing case-sensitive.
<p>
The wildcard matcher uses the characters '?' and '*' to represent a
single or multiple (zero or more) wildcard characters.
This is the same as often found on DOS/Unix command lines.
The check is case-sensitive always.
<pre>
wildcardMatch("c.txt", "*.txt")      --&gt; true
wildcardMatch("c.txt", "*.jpg")      --&gt; false
wildcardMatch("a/b/c.txt", "a/b/*")  --&gt; true
wildcardMatch("c.txt", "*.???")      --&gt; true
wildcardMatch("c.txt", "*.????")     --&gt; false
</pre>
N.B. the sequence "*?" does not work properly at present in match strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | the fileName to match on |
| `wildcardMatcher` | `string` | the wildcard string to match against |

#### Returns

`boolean`

true if the fileName matches the wildcard string

#### Defined in

[src/FilenameUtils.ts:1441](https://github.com/neoscrib/2a/blob/0cf656e/src/FilenameUtils.ts#L1441)
