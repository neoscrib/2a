[2a](../README.md) / [Exports](../modules.md) / Lz

# Class: Lz<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- `IterableIterator`<`T`\>

## Table of contents

### Constructors

- [constructor](Lz.md#constructor)

### Properties

- [iterable](Lz.md#iterable)
- [identityFunction](Lz.md#identityfunction)

### Methods

- [[Symbol.iterator]](Lz.md#[symbol.iterator])
- [aggregate](Lz.md#aggregate)
- [all](Lz.md#all)
- [any](Lz.md#any)
- [append](Lz.md#append)
- [average](Lz.md#average)
- [concat](Lz.md#concat)
- [count](Lz.md#count)
- [defaultIfEmpty](Lz.md#defaultifempty)
- [distinct](Lz.md#distinct)
- [except](Lz.md#except)
- [first](Lz.md#first)
- [firstOrDefault](Lz.md#firstordefault)
- [forEach](Lz.md#foreach)
- [groupBy](Lz.md#groupby)
- [insert](Lz.md#insert)
- [intersect](Lz.md#intersect)
- [join](Lz.md#join)
- [last](Lz.md#last)
- [lastOrDefault](Lz.md#lastordefault)
- [max](Lz.md#max)
- [min](Lz.md#min)
- [next](Lz.md#next)
- [orderBy](Lz.md#orderby)
- [orderByDescending](Lz.md#orderbydescending)
- [partition](Lz.md#partition)
- [prepend](Lz.md#prepend)
- [return](Lz.md#return)
- [reverse](Lz.md#reverse)
- [select](Lz.md#select)
- [selectMany](Lz.md#selectmany)
- [sequenceEqual](Lz.md#sequenceequal)
- [single](Lz.md#single)
- [singleOrDefault](Lz.md#singleordefault)
- [skip](Lz.md#skip)
- [skipWhile](Lz.md#skipwhile)
- [sum](Lz.md#sum)
- [take](Lz.md#take)
- [takeWhile](Lz.md#takewhile)
- [throw](Lz.md#throw)
- [toArray](Lz.md#toarray)
- [toDictionary](Lz.md#todictionary)
- [toIterable](Lz.md#toiterable)
- [union](Lz.md#union)
- [where](Lz.md#where)
- [zip](Lz.md#zip)
- [aggregate](Lz.md#aggregate)
- [all](Lz.md#all)
- [any](Lz.md#any)
- [append](Lz.md#append)
- [appendInternal](Lz.md#appendinternal)
- [average](Lz.md#average)
- [concat](Lz.md#concat)
- [concatInternal](Lz.md#concatinternal)
- [count](Lz.md#count)
- [defaultIfEmpty](Lz.md#defaultifempty)
- [defaultIfEmptyInternal](Lz.md#defaultifemptyinternal)
- [distinct](Lz.md#distinct)
- [distinctInternal](Lz.md#distinctinternal)
- [empty](Lz.md#empty)
- [except](Lz.md#except)
- [exceptInternal](Lz.md#exceptinternal)
- [first](Lz.md#first)
- [firstOrDefault](Lz.md#firstordefault)
- [forEach](Lz.md#foreach)
- [groupBy](Lz.md#groupby)
- [groupByInternal](Lz.md#groupbyinternal)
- [insert](Lz.md#insert)
- [insertInternal](Lz.md#insertinternal)
- [intersect](Lz.md#intersect)
- [intersectInternal](Lz.md#intersectinternal)
- [join](Lz.md#join)
- [joinInternal](Lz.md#joininternal)
- [last](Lz.md#last)
- [lastOrDefault](Lz.md#lastordefault)
- [max](Lz.md#max)
- [min](Lz.md#min)
- [orderBy](Lz.md#orderby)
- [orderByDescending](Lz.md#orderbydescending)
- [partition](Lz.md#partition)
- [partitionInternal](Lz.md#partitioninternal)
- [prepend](Lz.md#prepend)
- [prependInternal](Lz.md#prependinternal)
- [range](Lz.md#range)
- [rangeInternal](Lz.md#rangeinternal)
- [repeat](Lz.md#repeat)
- [repeatAction](Lz.md#repeataction)
- [repeatActionInternal](Lz.md#repeatactioninternal)
- [repeatInternal](Lz.md#repeatinternal)
- [reverse](Lz.md#reverse)
- [reverseInternal](Lz.md#reverseinternal)
- [select](Lz.md#select)
- [selectInternal](Lz.md#selectinternal)
- [selectMany](Lz.md#selectmany)
- [selectManyInternal](Lz.md#selectmanyinternal)
- [sequenceEqual](Lz.md#sequenceequal)
- [single](Lz.md#single)
- [singleOrDefault](Lz.md#singleordefault)
- [skip](Lz.md#skip)
- [skipInternal](Lz.md#skipinternal)
- [skipWhile](Lz.md#skipwhile)
- [skipWhileInternal](Lz.md#skipwhileinternal)
- [sum](Lz.md#sum)
- [take](Lz.md#take)
- [takeInternal](Lz.md#takeinternal)
- [takeWhile](Lz.md#takewhile)
- [takeWhileInternal](Lz.md#takewhileinternal)
- [toArray](Lz.md#toarray)
- [toDictionary](Lz.md#todictionary)
- [toIterable](Lz.md#toiterable)
- [toIterableInternal](Lz.md#toiterableinternal)
- [union](Lz.md#union)
- [where](Lz.md#where)
- [whereInternal](Lz.md#whereinternal)
- [zip](Lz.md#zip)
- [zipInternal](Lz.md#zipinternal)

## Constructors

### constructor

• **new Lz**<`T`\>(`iterable`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> |

#### Defined in

[src/Lz.ts:22](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L22)

## Properties

### iterable

• `Private` `Readonly` **iterable**: `IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:20](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L20)

___

### identityFunction

▪ `Static` `Readonly` **identityFunction**: `IdentityFunction`<`any`\>

#### Defined in

[src/Lz.ts:18](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L18)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Implementation of

IterableIterator.\_\_@iterator

#### Defined in

[src/Lz.ts:1526](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1526)

___

### aggregate

▸ **aggregate**<`U`\>(`func`, `seed?`): `U`

Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `AccumulatorFunction`<`T`, `U`\> | An accumulator function to be invoked on each element. |
| `seed?` | `U` | The initial accumulator value. |

#### Returns

`U`

The final accumulator value.

#### Defined in

[src/Lz.ts:1097](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1097)

___

### all

▸ **all**(`predicate`): `boolean`

Determines whether all elements of a sequence satisfy a condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`boolean`

<b>true</b> if every element of the source sequence passes the test in the specified predicate, or if the sequence is empty;
otherwise, <b>false</b>.

#### Defined in

[src/Lz.ts:1280](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1280)

___

### any

▸ **any**(`predicate`): `boolean`

Determines whether any element of a sequence satisfies a condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`boolean`

<b>true</b> if any elements in the source sequence pass the test in the specified predicate; otherwise, <b>false</b>.

#### Defined in

[src/Lz.ts:1254](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1254)

___

### append

▸ **append**(...`elements`): [`Lz`](Lz.md)<`T`\>

Appends a value to the end of the sequence.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...elements` | `T`[] | The value(s) to append to source. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A new sequence that ends with element.

#### Defined in

[src/Lz.ts:56](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L56)

___

### average

▸ **average**(`selector`): `number`

Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The average of the sequence of values, or 0 if the source sequence is empty.

#### Defined in

[src/Lz.ts:1191](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1191)

▸ **average**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1192](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1192)

___

### concat

▸ **concat**(`second`): [`Lz`](Lz.md)<`T`\>

Concatenates two sequences.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `LzIterable`<`T`\> | The sequence to concatenate to the first sequence. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the concatenated elements of the two input sequences.

#### Defined in

[src/Lz.ts:116](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L116)

___

### count

▸ **count**(`predicate?`): `number`

Returns a number that represents how many elements in the specified sequence satisfy a condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`number`

A number that represents how many elements in the sequence satisfy the condition in the predicate function.

#### Defined in

[src/Lz.ts:1223](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1223)

___

### defaultIfEmpty

▸ **defaultIfEmpty**(`defaultValue`): [`Lz`](Lz.md)<`T`\>

Returns the elements of the specified sequence or the specified value as a singleton collection if the
sequence is empty.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue` | `T` | The value to return if the sequence is empty. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains <i>defaultValue</i> if <i>source</i> is empty; otherwise,
<i>source</i>

#### Defined in

[src/Lz.ts:146](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L146)

___

### distinct

▸ **distinct**(`comparator?`): [`Lz`](Lz.md)<`T`\>

Returns distinct elements from a sequence by using a specified ComparatorFunction<T> to compare values.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comparator?` | `ComparatorFunction`<`T`\> | Optional. A ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains distinct elements from the source sequence.

#### Defined in

[src/Lz.ts:187](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L187)

___

### except

▸ **except**(`second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the set difference of two sequences by using the specified <i>ComparatorFunction<T></i> to compare
values.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `LzIterable`<`T`\> | A sequence whose elements that also occur in the first sequence will cause those elements to be removed from the returned sequence. |
| `comparator?` | `ComparatorFunction`<`T`\> | Optional. A ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the set difference of the elements of two sequences.

#### Defined in

[src/Lz.ts:240](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L240)

___

### first

▸ **first**(`predicate?`): `T`

Returns the first element of a sequence.

**`throws`** If the source sequence contains no elements or the predicate did not match any elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The first element.

#### Defined in

[src/Lz.ts:1384](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1384)

___

### firstOrDefault

▸ **firstOrDefault**(`defaultValue`, `predicate?`): `T`

Returns the first element of a sequence, or a default value if the sequence contains no elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue` | `T` | The default value. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The first element, or a default value if the sequence contains no elements.

#### Defined in

[src/Lz.ts:1417](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1417)

___

### forEach

▸ **forEach**(`action`): `void`

Performs the specified action on each element of the sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `SelectorFunction`<`T`, `void`\> | The action delegate to perform on each element of the sequence. |

#### Returns

`void`

#### Defined in

[src/Lz.ts:279](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L279)

___

### groupBy

▸ **groupBy**<`K`\>(`keySelector`): [`Lz`](Lz.md)<[`K`, `T`[]]\>

Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
specified function.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract the key for each element. |

#### Returns

[`Lz`](Lz.md)<[`K`, `T`[]]\>

A Map where each entry contains a collection of objects of type T.

#### Defined in

[src/Lz.ts:937](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L937)

▸ **groupBy**<`K`, `V`\>(`keySelector`, `elementSelector?`): [`Lz`](Lz.md)<[`K`, `V`[]]\>

Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
specified function.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract the key for each element. |
| `elementSelector?` | `SelectorFunction`<`T`, `V`\> | A function to map each source element to an element in the returned Map. |

#### Returns

[`Lz`](Lz.md)<[`K`, `V`[]]\>

A Map where each entry contains a collection of objects of type V.

#### Defined in

[src/Lz.ts:945](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L945)

___

### insert

▸ **insert**(`element`, `index`): [`Lz`](Lz.md)<`T`\>

Inserts a value into the source sequence at the specified index.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The value to insert to <i>source</i>. |
| `index` | `number` | The index at which to insert <i>element</i>. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A new sequence that contains <i>element</i> at <i>index</i>.

#### Defined in

[src/Lz.ts:300](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L300)

___

### intersect

▸ **intersect**(`second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the set intersection of two sequences.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `LzIterable`<`T`\> | A sequence whose distinct elements that also appear in the first sequence will be returned. |
| `comparator?` | `ComparatorFunction`<`T`\> | A ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements that form the set intersection of two sequences.

#### Defined in

[src/Lz.ts:339](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L339)

___

### join

▸ **join**<`T2`, `K`, `U`\>(`inner`, `outerKeySelector`, `innerKeySelector`, `resultSelector`): [`Lz`](Lz.md)<`U`\>

Correlates the elements of two sequences based on matching keys.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T2` |
| `K` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inner` | `IterableIterator`<`T2`\> \| `T2`[] | The sequence to join to the first sequence. |
| `outerKeySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract the join key from each element of the first sequence. |
| `innerKeySelector` | `SelectorFunction`<`T2`, `K`\> | A function to extract the join key from each element of the second sequence. |
| `resultSelector` | (`a`: `T`, `b`: `T2`) => `U` | A function to create a result element from two matching elements. |

#### Returns

[`Lz`](Lz.md)<`U`\>

A sequence that has elements of type <i>U</i> that are obtained by performing an inner
join on two sequences.

#### Defined in

[src/Lz.ts:385](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L385)

___

### last

▸ **last**(`predicate?`): `T`

Returns the last element of a sequence.

**`throws`** If the source sequence contains no elements or the predicate did not match any elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The value at the last position in the source sequence.

#### Defined in

[src/Lz.ts:433](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L433)

___

### lastOrDefault

▸ **lastOrDefault**(`defaultValue`, `predicate?`): `T`

Returns the last element of a sequence, or a default value if no element is found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue` | `T` | The default value. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The value at the last position in the source sequence.

#### Defined in

[src/Lz.ts:471](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L471)

___

### max

▸ **max**(`selector`): `number`

Invokes a transform function on each element of a sequence and returns the maximum value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The maximum value in the sequence.

#### Defined in

[src/Lz.ts:1122](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1122)

▸ **max**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1123](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1123)

___

### min

▸ **min**(`selector`): `number`

Invokes a transform function on each element of a sequence and returns the minimum value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The minimum value in the sequence.

#### Defined in

[src/Lz.ts:1145](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1145)

▸ **min**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1146](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1146)

___

### next

▸ **next**(`value?`): `IteratorResult`<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`IteratorResult`<`T`, `any`\>

#### Implementation of

IterableIterator.next

#### Defined in

[src/Lz.ts:1530](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1530)

___

### orderBy

▸ **orderBy**<`V`\>(`selector`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending order according to a key.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:517](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L517)

▸ **orderBy**<`V`\>(`selector`, `comparator`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending order by using a specified comparator.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |
| `comparator` | `ComparatorFunction`<`V`\> | A ComparatorFunction<V> to compare keys. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:525](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L525)

___

### orderByDescending

▸ **orderByDescending**<`V`\>(`selector`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in descending order according to a key.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:557](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L557)

▸ **orderByDescending**<`V`\>(`selector`, `comparator`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in descending order by using a specified comparator.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |
| `comparator` | `ComparatorFunction`<`V`\> | A ComparatorFunction<V> to compare keys. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:565](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L565)

___

### partition

▸ **partition**(`size`): [`Lz`](Lz.md)<`T`[]\>

Partitions the sequence into arrays of specified size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size of each partitioned array. The last array may be smaller if there are not enough elements in the sequence to fill it. |

#### Returns

[`Lz`](Lz.md)<`T`[]\>

A sequence that contains the partitioned arrays.

#### Defined in

[src/Lz.ts:996](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L996)

___

### prepend

▸ **prepend**(...`elements`): [`Lz`](Lz.md)<`T`\>

Adds a value to the beginning of the sequence.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...elements` | `T`[] | The value(s) to prepend to <i>source</i>. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A new sequence that begins with <i>element</i>.

#### Defined in

[src/Lz.ts:88](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L88)

___

### return

▸ **return**(`value?`): `IteratorResult`<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`IteratorResult`<`T`, `any`\>

#### Implementation of

IterableIterator.return

#### Defined in

[src/Lz.ts:1534](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1534)

___

### reverse

▸ **reverse**(): [`Lz`](Lz.md)<`T`\>

Inverts the order of the elements in a sequence.

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence whose elements correspond to those of the input sequence in reverse order.

#### Defined in

[src/Lz.ts:671](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L671)

___

### select

▸ **select**<`U`\>(`selector`): [`Lz`](Lz.md)<`U`\>

Projects each element of a sequence into a new form.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunction`<`T`, `U`\> | A transform function to apply to each element. |

#### Returns

[`Lz`](Lz.md)<`U`\>

An iterable whose elements are the result of invoking the transform function on each element of source.

#### Defined in

[src/Lz.ts:763](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L763)

___

### selectMany

▸ **selectMany**<`U`\>(`selector`): [`Lz`](Lz.md)<`U`\>

Projects each element of a sequence to an IterableIterator<U> and flattens the resulting sequences into one sequence.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunction`<`T`, `IterableIterator`<`U`\> \| `U`[]\> | A transform function to apply to each element. |

#### Returns

[`Lz`](Lz.md)<`U`\>

An sequence whose elements are the result of invoking the one-to-many transform function on each element of the input
sequence.

#### Defined in

[src/Lz.ts:790](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L790)

___

### sequenceEqual

▸ **sequenceEqual**(`second`, `comparator?`): `boolean`

Determines whether two sequences are equal by comparing their elements by using a specified
ComparatorFunction<T>.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `LzIterable`<`T`\> | A sequence to compare to the first sequence. |
| `comparator?` | `ComparatorFunction`<`T`\> | A ComparatorFunction<T> to use to compare elements. |

#### Returns

`boolean`

<i>true</i> if the two source sequences are of equal length and their corresponding elements
compare equal according to <i>comparator</i>; otherwise, <i>false</i>.

#### Defined in

[src/Lz.ts:699](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L699)

___

### single

▸ **single**(`predicate?`): `T`

Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.

**`throws`** If no element satisfies the condition in predicate, or more than one element satisfies the condition
in predicate, or the source sequence is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test an element for a condition. Return true to keep the element, false otherwise. |

#### Returns

`T`

The single element of the input sequence that satisfies a condition.

#### Defined in

[src/Lz.ts:1309](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1309)

___

### singleOrDefault

▸ **singleOrDefault**(`defaultValue`, `predicate?`): `T`

Returns the only element of a sequence that satisfies a specified condition or a default value if no such element
exists; this method throws an exception if more than one element satisfies the condition.

**`throws`** If more than one element satisfies the condition in predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue` | `T` | The default value. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test an element for a condition. Return true to keep the element, false otherwise. |

#### Returns

`T`

The single element of the input sequence that satisfies a condition.

#### Defined in

[src/Lz.ts:1347](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1347)

___

### skip

▸ **skip**(`count`): [`Lz`](Lz.md)<`T`\>

Bypasses a specified number of elements in a sequence and then returns the remaining elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The number of elements to skip before returning the remaining elements. |

#### Returns

[`Lz`](Lz.md)<`T`\>

An iterable that contains the elements that occur after the specified index in the input sequence.

#### Defined in

[src/Lz.ts:845](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L845)

___

### skipWhile

▸ **skipWhile**(`predicate`): [`Lz`](Lz.md)<`T`\>

Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements from the input sequence starting at the first element in the linear series
that does not pass the test specified by predicate.

#### Defined in

[src/Lz.ts:906](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L906)

___

### sum

▸ **sum**(`selector`): `number`

Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The sum of the projected values.

#### Defined in

[src/Lz.ts:1168](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1168)

▸ **sum**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1169](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1169)

___

### take

▸ **take**(`count`): [`Lz`](Lz.md)<`T`\>

Returns a specified number of contiguous elements from the start of a sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The number of elements to return. |

#### Returns

[`Lz`](Lz.md)<`T`\>

An iterable that contains the specified number of elements from the start of the input sequence.

#### Defined in

[src/Lz.ts:817](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L817)

___

### takeWhile

▸ **takeWhile**(`predicate`): [`Lz`](Lz.md)<`T`\>

Returns elements from a sequence as long as a specified condition is true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements from the input sequence that occur before the element at which the test no
longer passes.

#### Defined in

[src/Lz.ts:874](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L874)

___

### throw

▸ **throw**(`e?`): `IteratorResult`<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`IteratorResult`<`T`, `any`\>

#### Implementation of

IterableIterator.throw

#### Defined in

[src/Lz.ts:1538](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1538)

___

### toArray

▸ **toArray**(): `T`[]

Creates an array from a IterableIterator<T>.

#### Returns

`T`[]

An array that contains the elements from the input sequence.

#### Defined in

[src/Lz.ts:1513](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1513)

___

### toDictionary

▸ **toDictionary**<`T`, `T1`, `T2`\>(): `Map`<`T1`, `T2`\>

Creates a Map from a sequence of IterableIterator<[T1, T2]>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`T1`, `T2`] |
| `T1` | `T1` |
| `T2` | `T2` |

#### Returns

`Map`<`T1`, `T2`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1444](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1444)

▸ **toDictionary**<`K`, `T`\>(`keySelector`): `Map`<`K`, `T`\>

Creates a Map from an Array according to a specified key selector function.

#### Type parameters

| Name |
| :------ |
| `K` |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract a key from each element. |

#### Returns

`Map`<`K`, `T`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1451](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1451)

▸ **toDictionary**<`K`, `U`\>(`keySelector`, `elementSelector`): `Map`<`K`, `U`\>

Creates a Map from an Array according to a specified key selector function.

#### Type parameters

| Name |
| :------ |
| `K` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract a key from each element. |
| `elementSelector` | `SelectorFunction`<`T`, `U`\> | A function to map each source element to an element in the returned Map. |

#### Returns

`Map`<`K`, `U`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1459](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1459)

___

### toIterable

▸ **toIterable**(): [`Lz`](Lz.md)<`T`\>

Returns the input typed as LzIterable<T>.

#### Returns

[`Lz`](Lz.md)<`T`\>

The input sequence typed as LzIterable<T>.

#### Defined in

[src/Lz.ts:30](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L30)

___

### union

▸ **union**(`second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the set union of two sequences.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `LzIterable`<`T`\> | A sequence whose distinct elements form the second set for the union. |
| `comparator?` | `ComparatorFunction`<`T`\> | The ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements from both input sequences, excluding duplicates.

#### Defined in

[src/Lz.ts:1036](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1036)

___

### where

▸ **where**(`predicate`): [`Lz`](Lz.md)<`T`\>

Filters a sequence of values based on a predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. Return true to keep the element, false otherwise. |

#### Returns

[`Lz`](Lz.md)<`T`\>

An iterable that contains elements from the input sequence that satisfy the condition.

#### Defined in

[src/Lz.ts:734](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L734)

___

### zip

▸ **zip**<`U`, `V`\>(`second`, `resultSelector`): [`Lz`](Lz.md)<`V`\>

Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.

#### Type parameters

| Name |
| :------ |
| `U` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `IterableIterator`<`U`\> | The second sequence to merge. |
| `resultSelector` | (`first`: `T`, `second`: `U`) => `V` | A function that specifies how to merge the elements from the two sequences. |

#### Returns

[`Lz`](Lz.md)<`V`\>

A sequence that contains merged elements of two input sequences.

#### Defined in

[src/Lz.ts:1062](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1062)

___

### aggregate

▸ `Static` **aggregate**<`T`, `U`\>(`source`, `func`, `seed?`): `U`

Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to aggregate over. |
| `func` | `AccumulatorFunction`<`T`, `U`\> | An accumulator function to be invoked on each element. |
| `seed?` | `U` | The initial accumulator value. |

#### Returns

`U`

The final accumulator value.

#### Defined in

[src/Lz.ts:1108](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1108)

___

### all

▸ `Static` **all**<`T`\>(`source`, `predicate`): `boolean`

Determines whether all elements of a sequence satisfy a condition.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence that contains the elements to apply the predicate to. |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`boolean`

<b>true</b> if every element of the source sequence passes the test in the specified predicate, or if the sequence is empty;
otherwise, <b>false</b>.

#### Defined in

[src/Lz.ts:1291](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1291)

___

### any

▸ `Static` **any**<`T`\>(`source`, `predicate`): `boolean`

Determines whether any element of a sequence satisfies a condition.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence whose elements to apply the predicate to. |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`boolean`

<b>true</b> if any elements in the source sequence pass the test in the specified predicate; otherwise, <b>false</b>.

#### Defined in

[src/Lz.ts:1264](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1264)

___

### append

▸ `Static` **append**<`T`\>(`source`, ...`elements`): [`Lz`](Lz.md)<`T`\>

Appends a value to the end of the sequence.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values. |
| `...elements` | `T`[] | The value(s) to append to source. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A new sequence that ends with element.

#### Defined in

[src/Lz.ts:70](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L70)

___

### appendInternal

▸ `Static` `Private` **appendInternal**<`T`\>(`source`, ...`elements`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `...elements` | `T`[] |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:74](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L74)

___

### average

▸ `Static` **average**<`T`\>(`source`, `selector`): `number`

Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values that are used to calculate an average. |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The average of the sequence of values, or 0 if the source sequence is empty.

#### Defined in

[src/Lz.ts:1203](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1203)

▸ `Static` **average**<`T`\>(`source`, `selector?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `selector?` | `SelectorFunction`<`T`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1204](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1204)

___

### concat

▸ `Static` **concat**<`T`\>(`first`, `second`): [`Lz`](Lz.md)<`T`\>

Concatenates two sequences.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | The first sequence to concatenate. |
| `second` | `LzIterable`<`T`\> | The sequence to concatenate to the first sequence. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the concatenated elements of the two input sequences.

#### Defined in

[src/Lz.ts:126](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L126)

___

### concatInternal

▸ `Static` `Private` **concatInternal**<`T`\>(`first`, `second`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `LzIterable`<`T`\> |
| `second` | `LzIterable`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:130](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L130)

___

### count

▸ `Static` **count**<`T`\>(`source`, `predicate?`): `number`

Returns a number that represents how many elements in the specified sequence satisfy a condition.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to return elements from. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`number`

A number that represents how many elements in the sequence satisfy the condition in the predicate function.

#### Defined in

[src/Lz.ts:1233](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1233)

___

### defaultIfEmpty

▸ `Static` **defaultIfEmpty**<`T`\>(`source`, `defaultValue`): [`Lz`](Lz.md)<`T`\>

Returns the elements of the specified sequence or the specified value as a singleton collection if the sequence
is empty.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to return the specified value for if it is empty. |
| `defaultValue` | `T` | The value to return if the sequence is empty. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains <i>defaultValue</i> if <i>source</i> is empty; otherwise,
<i>source</i>.

#### Defined in

[src/Lz.ts:162](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L162)

___

### defaultIfEmptyInternal

▸ `Static` `Private` **defaultIfEmptyInternal**<`T`\>(`source`, `defaultValue`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `defaultValue` | `T` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:166](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L166)

___

### distinct

▸ `Static` **distinct**<`T`\>(`source`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Returns distinct elements from a sequence by using a specified ComparatorFunction<T> to compare values.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to remove duplicate elements from. |
| `comparator?` | `ComparatorFunction`<`T`\> | Optional. A ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains distinct elements from the source sequence.

#### Defined in

[src/Lz.ts:201](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L201)

___

### distinctInternal

▸ `Static` `Private` **distinctInternal**<`T`\>(`source`, `comparator?`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `comparator?` | `ComparatorFunction`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:205](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L205)

___

### empty

▸ `Static` **empty**<`T`\>(): [`Lz`](Lz.md)<`T`\>

Returns an empty sequence that has the specified type argument.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Lz`](Lz.md)<`T`\>

An empty sequence whose type argument is <i>T</i>.

#### Defined in

[src/Lz.ts:224](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L224)

___

### except

▸ `Static` **except**<`T`\>(`first`, `second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the set difference of two sequences by using the specified <i>ComparatorFunction<T></i> to compare
values.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | A sequence whose elements that are not also in <i>second</i> will be returned. |
| `second` | `LzIterable`<`T`\> | A sequence whose elements that also occur in the first sequence will cause those elements to be removed from the returned sequence. |
| `comparator?` | `ComparatorFunction`<`T`\> | Optional. A ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the set difference of the elements of two sequences.

#### Defined in

[src/Lz.ts:258](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L258)

___

### exceptInternal

▸ `Static` `Private` **exceptInternal**<`T`\>(`first`, `second`, `comparator?`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | `undefined` |
| `second` | `LzIterable`<`T`\> | `undefined` |
| `comparator` | `ComparatorFunction`<`T`\> | `Comparator.defaultComparator` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:263](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L263)

___

### first

▸ `Static` **first**<`T`\>(`source`, `predicate?`): `T`

Returns the first element of a sequence.

**`throws`** If the source sequence contains no elements or the predicate did not match any elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to return an element from. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The first element.

#### Defined in

[src/Lz.ts:1395](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1395)

___

### firstOrDefault

▸ `Static` **firstOrDefault**<`T`\>(`source`, `defaultValue`, `predicate?`): `T`

Returns the first element of a sequence, or a default value if the sequence contains no elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to return an element from. |
| `defaultValue` | `T` | The default value. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The first element, or a default value if the sequence contains no elements.

#### Defined in

[src/Lz.ts:1428](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1428)

___

### forEach

▸ `Static` **forEach**<`T`\>(`source`, `action`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `action` | `SelectorFunction`<`T`, `void`\> |

#### Returns

`void`

#### Defined in

[src/Lz.ts:283](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L283)

___

### groupBy

▸ `Static` **groupBy**<`T`, `K`\>(`source`, `keySelector`): [`Lz`](Lz.md)<[`K`, `T`[]]\>

Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
specified function.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence whose elements to group. |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract the key for each element. |

#### Returns

[`Lz`](Lz.md)<[`K`, `T`[]]\>

A Map where each entry contains a collection of objects of type V.

#### Defined in

[src/Lz.ts:957](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L957)

▸ `Static` **groupBy**<`T`, `K`, `V`\>(`source`, `keySelector`, `elementSelector?`): [`Lz`](Lz.md)<[`K`, `V`[]]\>

Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
specified function.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence whose elements to group. |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract the key for each element. |
| `elementSelector?` | `SelectorFunction`<`T`, `V`\> | A function to map each source element to an element in the returned Map. |

#### Returns

[`Lz`](Lz.md)<[`K`, `V`[]]\>

A Map where each entry contains a collection of objects of type V.

#### Defined in

[src/Lz.ts:967](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L967)

___

### groupByInternal

▸ `Static` `Private` **groupByInternal**<`T`, `K`, `V`\>(`source`, `keySelector`, `elementSelector`): `IterableIterator`<[`K`, `V`[]]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `keySelector` | `SelectorFunction`<`T`, `K`\> |
| `elementSelector` | `SelectorFunction`<`T`, `V`\> |

#### Returns

`IterableIterator`<[`K`, `V`[]]\>

#### Defined in

[src/Lz.ts:974](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L974)

___

### insert

▸ `Static` **insert**<`T`\>(`source`, `element`, `index`): [`Lz`](Lz.md)<`T`\>

Inserts a value into the source sequence at the specified index.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence in which to insert the new item. |
| `element` | `T` | The value to insert to <i>source</i>. |
| `index` | `number` | The index at which to insert <i>element</i>. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A new sequence that contains <i>element</i> at <i>index</i>.

#### Defined in

[src/Lz.ts:315](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L315)

___

### insertInternal

▸ `Static` `Private` **insertInternal**<`T`\>(`source`, `element`, `index`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `element` | `T` |
| `index` | `number` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:319](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L319)

___

### intersect

▸ `Static` **intersect**<`T`\>(`first`, `second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the set intersection of two sequences.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | A sequence whose distinct elements that also appear in <i>second</i> will be returned. |
| `second` | `LzIterable`<`T`\> | A sequence whose distinct elements that also appear in the first sequence will be returned. |
| `comparator?` | `ComparatorFunction`<`T`\> | A ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements that form the set intersection of two sequences.

#### Defined in

[src/Lz.ts:355](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L355)

___

### intersectInternal

▸ `Static` `Private` **intersectInternal**<`T`\>(`first`, `second`, `comparator?`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | `undefined` |
| `second` | `LzIterable`<`T`\> | `undefined` |
| `comparator` | `ComparatorFunction`<`T`\> | `Comparator.defaultComparator` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:360](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L360)

___

### join

▸ `Static` **join**<`T1`, `T2`, `K`, `U`\>(`outer`, `inner`, `outerKeySelector`, `innerKeySelector`, `resultSelector`): [`Lz`](Lz.md)<`U`\>

Correlates the elements of two sequences based on matching keys.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `K` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer` | `IterableIterator`<`T1`\> \| `T1`[] | The first sequence to join. |
| `inner` | `IterableIterator`<`T2`\> \| `T2`[] | The sequence to join to the first sequence. |
| `outerKeySelector` | `SelectorFunction`<`T1`, `K`\> | A function to extract the join key from each element of the first sequence. |
| `innerKeySelector` | `SelectorFunction`<`T2`, `K`\> | A function to extract the join key from each element of the second sequence. |
| `resultSelector` | (`a`: `T1`, `b`: `T2`) => `U` | A function to create a result element from two matching elements. |

#### Returns

[`Lz`](Lz.md)<`U`\>

A sequence that has elements of type <i>U</i> that are obtained by performing an inner
join on two sequences.

#### Defined in

[src/Lz.ts:406](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L406)

___

### joinInternal

▸ `Static` `Private` **joinInternal**<`T1`, `T2`, `K`, `U`\>(`outer`, `inner`, `outerKeySelector`, `innerKeySelector`, `resultSelector`): `IterableIterator`<`U`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `K` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `outer` | `IterableIterator`<`T1`\> \| `T1`[] |
| `inner` | `IterableIterator`<`T2`\> \| `T2`[] |
| `outerKeySelector` | `SelectorFunction`<`T1`, `K`\> |
| `innerKeySelector` | `SelectorFunction`<`T2`, `K`\> |
| `resultSelector` | (`a`: `T1`, `b`: `T2`) => `U` |

#### Returns

`IterableIterator`<`U`\>

#### Defined in

[src/Lz.ts:413](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L413)

___

### last

▸ `Static` **last**<`T`\>(`source`, `predicate?`): `T`

Returns the last element of a sequence.

**`throws`** If the source sequence contains no elements or the predicate did not match any elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence to return the last element of. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The value at the last position in the source sequence.

#### Defined in

[src/Lz.ts:444](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L444)

___

### lastOrDefault

▸ `Static` **lastOrDefault**<`T`\>(`source`, `defaultValue`, `predicate?`): `T`

Returns the last element of a sequence, or a default value if no element is found.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence to return the last element of. |
| `defaultValue` | `T` | The default value. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

`T`

The value at the last position in the source sequence.

#### Defined in

[src/Lz.ts:482](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L482)

___

### max

▸ `Static` **max**<`T`\>(`source`, `selector`): `number`

Invokes a transform function on each element of a sequence and returns the maximum value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to determine the maximum value of. |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The maximum value in the sequence.

#### Defined in

[src/Lz.ts:1134](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1134)

▸ `Static` **max**<`T`\>(`source`, `selector?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `selector?` | `SelectorFunction`<`T`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1135](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1135)

___

### min

▸ `Static` **min**<`T`\>(`source`, `selector`): `number`

Invokes a transform function on each element of a sequence and returns the minimum value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to determine the minimum value of. |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The minimum value in the sequence.

#### Defined in

[src/Lz.ts:1157](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1157)

▸ `Static` **min**<`T`\>(`source`, `selector?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `selector?` | `SelectorFunction`<`T`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1158](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1158)

___

### orderBy

▸ `Static` **orderBy**<`T`, `V`\>(`source`, `selector`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending order according to a key.

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to order. |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:537](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L537)

▸ `Static` **orderBy**<`T`, `V`\>(`source`, `selector`, `comparator`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending order by using a specified comparator.

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to order. |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |
| `comparator` | `ComparatorFunction`<`V`\> | A ComparatorFunction<V> to compare keys. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:546](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L546)

___

### orderByDescending

▸ `Static` **orderByDescending**<`T`, `V`\>(`source`, `selector`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in descending order according to a key.

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to order. |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:577](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L577)

▸ `Static` **orderByDescending**<`T`, `V`\>(`source`, `selector`, `comparator`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in descending order by using a specified comparator.

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to order. |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |
| `comparator` | `ComparatorFunction`<`V`\> | A ComparatorFunction<V> to compare keys. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:586](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L586)

___

### partition

▸ `Static` **partition**<`T`\>(`source`, `size`): [`Lz`](Lz.md)<`T`[]\>

Partitions the sequence into arrays of specified size.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence whose elements to partition. |
| `size` | `number` | The size of each partitioned array. The last array may be smaller if there are not enough elements in the sequence to fill it. |

#### Returns

[`Lz`](Lz.md)<`T`[]\>

A sequence that contains the partitioned arrays.

#### Defined in

[src/Lz.ts:1007](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1007)

___

### partitionInternal

▸ `Static` `Private` **partitionInternal**<`T`\>(`source`, `size`): `IterableIterator`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `size` | `number` |

#### Returns

`IterableIterator`<`T`[]\>

#### Defined in

[src/Lz.ts:1011](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1011)

___

### prepend

▸ `Static` **prepend**<`T`\>(`source`, ...`elements`): [`Lz`](Lz.md)<`T`\>

Adds a value to the beginning of the sequence.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values. |
| `...elements` | `T`[] | The value(s) to prepend to <i>source</i>. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A new sequence that begins with <i>element</i>.

#### Defined in

[src/Lz.ts:102](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L102)

___

### prependInternal

▸ `Static` `Private` **prependInternal**<`T`\>(`source`, ...`elements`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `...elements` | `T`[] |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:106](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L106)

___

### range

▸ `Static` **range**(`start`, `count`): [`Lz`](Lz.md)<`number`\>

Generates a sequence of integral numbers within a specified range.

**`throws`** If count is less than 0.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The value of the first integer in the sequence. |
| `count` | `number` | The number of sequential integers to generate. |

#### Returns

[`Lz`](Lz.md)<`number`\>

A sequence that contains a range of sequential integral numbers.

#### Defined in

[src/Lz.ts:603](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L603)

___

### rangeInternal

▸ `Static` `Private` **rangeInternal**(`start`, `count`): `IterableIterator`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `count` | `number` |

#### Returns

`IterableIterator`<`number`\>

#### Defined in

[src/Lz.ts:607](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L607)

___

### repeat

▸ `Static` **repeat**<`T`\>(`element`, `count`): [`Lz`](Lz.md)<`T`\>

Generates a sequence that contains one repeated value.

**`throws`** If count is less than 0.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The value to be repeated. |
| `count` | `number` | The number of times to repeat the value in the generated sequence. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains a repeated value.

#### Defined in

[src/Lz.ts:630](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L630)

___

### repeatAction

▸ `Static` **repeatAction**<`T`\>(`selector`, `count`): [`Lz`](Lz.md)<`T`\>

Generates a sequence that contains the results of a repeated action.

**`throws`** If count is less than 0.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunction`<`void`, `T`\> |  |
| `count` | `number` | The number of times to repeat the action in the generated sequence. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the results of the repeated action.

#### Defined in

[src/Lz.ts:654](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L654)

___

### repeatActionInternal

▸ `Static` `Private` **repeatActionInternal**<`T`\>(`selector`, `count`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `SelectorFunction`<`void`, `T`\> |
| `count` | `number` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:658](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L658)

___

### repeatInternal

▸ `Static` `Private` **repeatInternal**<`T`\>(`element`, `count`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |
| `count` | `number` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:634](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L634)

___

### reverse

▸ `Static` **reverse**<`T`\>(`source`): [`Lz`](Lz.md)<`T`\>

Inverts the order of the elements in a sequence.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to reverse. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence whose elements correspond to those of the input sequence in reverse order.

#### Defined in

[src/Lz.ts:680](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L680)

___

### reverseInternal

▸ `Static` `Private` **reverseInternal**<`T`\>(`source`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:684](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L684)

___

### select

▸ `Static` **select**<`T`, `U`\>(`source`, `selector`): [`Lz`](Lz.md)<`U`\>

Projects each element of a sequence into a new form.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | An iterable of values to invoke a transform function on. |
| `selector` | `SelectorFunction`<`T`, `U`\> | A transform function to apply to each element. |

#### Returns

[`Lz`](Lz.md)<`U`\>

An iterable whose elements are the result of invoking the transform function on each element of source.

#### Defined in

[src/Lz.ts:773](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L773)

___

### selectInternal

▸ `Static` `Private` **selectInternal**<`T`, `U`\>(`source`, `selector`): `IterableIterator`<`U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `selector` | `SelectorFunction`<`T`, `U`\> |

#### Returns

`IterableIterator`<`U`\>

#### Defined in

[src/Lz.ts:777](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L777)

___

### selectMany

▸ `Static` **selectMany**<`T`, `U`\>(`source`, `selector`): [`Lz`](Lz.md)<`U`\>

Projects each element of a sequence to an IterableIterator<U> and flattens the resulting sequences into one sequence.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values to project. |
| `selector` | `SelectorFunction`<`T`, `IterableIterator`<`U`\> \| `U`[]\> | A transform function to apply to each element. |

#### Returns

[`Lz`](Lz.md)<`U`\>

An sequence whose elements are the result of invoking the one-to-many transform function on each element of the input
sequence.

#### Defined in

[src/Lz.ts:801](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L801)

___

### selectManyInternal

▸ `Static` `Private` **selectManyInternal**<`T`, `U`\>(`source`, `selector`): `IterableIterator`<`U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `selector` | `SelectorFunction`<`T`, `IterableIterator`<`U`\> \| `U`[]\> |

#### Returns

`IterableIterator`<`U`\>

#### Defined in

[src/Lz.ts:805](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L805)

___

### sequenceEqual

▸ `Static` **sequenceEqual**<`T`\>(`first`, `second`, `comparator?`): `boolean`

Determines whether two sequences are equal by comparing their elements by using a specified
ComparatorFunction<T>.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | `undefined` | A sequence to compare to <i>second</i>. |
| `second` | `LzIterable`<`T`\> | `undefined` | A sequence to compare to the first sequence. |
| `comparator` | `ComparatorFunction`<`T`\> | `Comparator.defaultComparator` | A ComparatorFunction<T> to use to compare elements. |

#### Returns

`boolean`

<i>true</i> if the two source sequences are of equal length and their corresponding elements
compare equal according to <i>comparator</i>; otherwise, <i>false</i>.

#### Defined in

[src/Lz.ts:712](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L712)

___

### single

▸ `Static` **single**<`T`\>(`source`, `predicate?`): `T`

Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.

**`throws`** If no element satisfies the condition in predicate, or more than one element satisfies the condition
in predicate, or the source sequence is empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | An iterable to return the single element of. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test an element for a condition. Return true to keep the element, false otherwise. |

#### Returns

`T`

The single element of the input sequence that satisfies a condition.

#### Defined in

[src/Lz.ts:1322](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1322)

___

### singleOrDefault

▸ `Static` **singleOrDefault**<`T`\>(`source`, `defaultValue`, `predicate?`): `T`

Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists;
this method throws an exception if more than one element satisfies the condition.

**`throws`** If more than one element satisfies the condition in predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence to return the single element from. |
| `defaultValue` | `T` | The default value. |
| `predicate?` | `PredicateFunction`<`T`\> | A function to test an element for a condition. Return true to keep the element, false otherwise. |

#### Returns

`T`

The single element of the input sequence that satisfies the condition, or <i>defaultValue</i> if
no such element is found.

#### Defined in

[src/Lz.ts:1362](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1362)

___

### skip

▸ `Static` **skip**<`T`\>(`source`, `count`): [`Lz`](Lz.md)<`T`\>

Bypasses a specified number of elements in a sequence and then returns the remaining elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to return elements from. |
| `count` | `number` | The number of elements to skip before returning the remaining elements. |

#### Returns

[`Lz`](Lz.md)<`T`\>

An iterable that contains the elements that occur after the specified index in the input sequence.

#### Defined in

[src/Lz.ts:855](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L855)

___

### skipInternal

▸ `Static` `Private` **skipInternal**<`T`\>(`source`, `count`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `count` | `number` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:859](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L859)

___

### skipWhile

▸ `Static` **skipWhile**<`T`\>(`source`, `predicate`): [`Lz`](Lz.md)<`T`\>

Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence to return elements from. |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements from the input sequence starting at the first element in the linear series
that does not pass the test specified by predicate.

#### Defined in

[src/Lz.ts:917](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L917)

___

### skipWhileInternal

▸ `Static` `Private` **skipWhileInternal**<`T`\>(`source`, `predicate?`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `predicate?` | `PredicateFunction`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:921](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L921)

___

### sum

▸ `Static` **sum**<`T`\>(`source`, `selector`): `number`

Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence of values that are used to calculate a sum. |
| `selector` | `SelectorFunction`<`T`, `number`\> | A transform function to apply to each element. |

#### Returns

`number`

The sum of the projected values.

#### Defined in

[src/Lz.ts:1180](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1180)

▸ `Static` **sum**<`T`\>(`source`, `selector?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `selector?` | `SelectorFunction`<`T`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1181](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1181)

___

### take

▸ `Static` **take**<`T`\>(`source`, `count`): [`Lz`](Lz.md)<`T`\>

Returns a specified number of contiguous elements from the start of a sequence.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to return elements from. |
| `count` | `number` | The number of elements to return. |

#### Returns

[`Lz`](Lz.md)<`T`\>

An iterable that contains the specified number of elements from the start of the input sequence.

#### Defined in

[src/Lz.ts:827](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L827)

___

### takeInternal

▸ `Static` `Private` **takeInternal**<`T`\>(`source`, `count`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `count` | `number` |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:831](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L831)

___

### takeWhile

▸ `Static` **takeWhile**<`T`\>(`source`, `predicate`): [`Lz`](Lz.md)<`T`\>

Returns elements from a sequence as long as a specified condition is true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | A sequence to return elements from. |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements from the input sequence that occur before the element at which the test no
longer passes.

#### Defined in

[src/Lz.ts:885](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L885)

___

### takeWhileInternal

▸ `Static` `Private` **takeWhileInternal**<`T`\>(`source`, `predicate?`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `predicate?` | `PredicateFunction`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:889](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L889)

___

### toArray

▸ `Static` **toArray**<`T`\>(`source`): `T`[]

Creates an array from a IterableIterator<T>.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | An IterableIterator<T> to create an array from. |

#### Returns

`T`[]

An array that contains the elements from the input sequence.

#### Defined in

[src/Lz.ts:1522](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1522)

___

### toDictionary

▸ `Static` **toDictionary**<`T`, `T1`, `T2`\>(`source`): `Map`<`T1`, `T2`\>

Creates a Map from a sequence of IterableIterator<[T1, T2]>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`T1`, `T2`] |
| `T1` | `T1` |
| `T2` | `T2` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to create a Map<K, T> from. |

#### Returns

`Map`<`T1`, `T2`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1469](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1469)

▸ `Static` **toDictionary**<`T`, `K`\>(`source`, `keySelector`): `Map`<`K`, `T`\>

Creates a Map from an Array according to a specified key selector function.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to create a Map<K, T> from. |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract a key from each element. |

#### Returns

`Map`<`K`, `T`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1477](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1477)

▸ `Static` **toDictionary**<`T`, `K`, `U`\>(`source`, `keySelector`, `elementSelector`): `Map`<`K`, `U`\>

Creates a Map from an Array according to a specified key selector function.

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to create a Map<K, T> from. |
| `keySelector` | `SelectorFunction`<`T`, `K`\> | A function to extract a key from each element. |
| `elementSelector` | `SelectorFunction`<`T`, `U`\> | A function to map each source element to an element in the returned Map. |

#### Returns

`Map`<`K`, `U`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1487](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1487)

___

### toIterable

▸ `Static` **toIterable**<`T`\>(`source`): [`Lz`](Lz.md)<`T`\>

Returns the input typed as LzIterable<T>.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | The sequence to type as LzIterable<T>. |

#### Returns

[`Lz`](Lz.md)<`T`\>

The input sequence typed as LzIterable<T>.

#### Defined in

[src/Lz.ts:39](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L39)

___

### toIterableInternal

▸ `Static` `Private` **toIterableInternal**<`T`\>(`source`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:43](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L43)

___

### union

▸ `Static` **union**<`T`\>(`first`, `second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the set union of two sequences.

**`remarks`**
This method is implemented by using deferred execution. The immediate return value is an object that stores all
the information that is required to perform the action. The query represented by this method is not executed
until the object is enumerated either by calling its toArray method directly or by using for...of.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | A sequence whose distinct elements form the first set for the union. |
| `second` | `LzIterable`<`T`\> | A sequence whose distinct elements form the second set for the union. |
| `comparator?` | `ComparatorFunction`<`T`\> | The ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the elements from both input sequences, excluding duplicates.

#### Defined in

[src/Lz.ts:1051](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1051)

___

### where

▸ `Static` **where**<`T`\>(`source`, `predicate`): [`Lz`](Lz.md)<`T`\>

Filters a sequence of values based on a predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | An iterable to filter. |
| `predicate` | `PredicateFunction`<`T`\> | A function to test each element for a condition. Return true to keep the element, false otherwise. |

#### Returns

[`Lz`](Lz.md)<`T`\>

An iterable that contains elements from the input sequence that satisfy the condition.

#### Defined in

[src/Lz.ts:745](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L745)

___

### whereInternal

▸ `Static` `Private` **whereInternal**<`T`\>(`source`, `predicate?`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `LzIterable`<`T`\> |
| `predicate?` | `PredicateFunction`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/Lz.ts:749](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L749)

___

### zip

▸ `Static` **zip**<`T`, `U`, `V`\>(`first`, `second`, `resultSelector`): [`Lz`](Lz.md)<`V`\>

Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `LzIterable`<`T`\> | The first sequence to merge. |
| `second` | `IterableIterator`<`U`\> | The second sequence to merge. |
| `resultSelector` | (`first`: `T`, `second`: `U`) => `V` | A function that specifies how to merge the elements from the two sequences. |

#### Returns

[`Lz`](Lz.md)<`V`\>

A sequence that contains merged elements of two input sequences.

#### Defined in

[src/Lz.ts:1074](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1074)

___

### zipInternal

▸ `Static` `Private` **zipInternal**<`T`, `U`, `V`\>(`first`, `second`, `resultSelector`): `IterableIterator`<`V`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `LzIterable`<`T`\> |
| `second` | `IterableIterator`<`U`\> |
| `resultSelector` | (`first`: `T`, `second`: `U`) => `V` |

#### Returns

`IterableIterator`<`V`\>

#### Defined in

[src/Lz.ts:1079](https://github.com/neoscrib/2a/blob/324b65a/src/Lz.ts#L1079)
