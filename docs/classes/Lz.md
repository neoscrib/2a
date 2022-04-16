[2a](../README.md) / Lz

# Class: Lz<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Lz`**

  ↳ [`LzGrouped`](LzGrouped.md)

## Implements

- `IterableIterator`<`T`\>

## Table of contents

### Constructors

- [constructor](Lz.md#constructor)

### Properties

- [identityFunction](Lz.md#identityfunction)

### Methods

- [[iterator]](Lz.md#[iterator])
- [aggregate](Lz.md#aggregate)
- [all](Lz.md#all)
- [any](Lz.md#any)
- [append](Lz.md#append)
- [average](Lz.md#average)
- [concat](Lz.md#concat)
- [count](Lz.md#count)
- [defaultIfEmpty](Lz.md#defaultifempty)
- [disjunctive](Lz.md#disjunctive)
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
- [toSet](Lz.md#toset)
- [union](Lz.md#union)
- [where](Lz.md#where)
- [zip](Lz.md#zip)
- [aggregate](Lz.md#aggregate)
- [all](Lz.md#all)
- [any](Lz.md#any)
- [append](Lz.md#append)
- [average](Lz.md#average)
- [concat](Lz.md#concat)
- [count](Lz.md#count)
- [defaultIfEmpty](Lz.md#defaultifempty)
- [disjunctive](Lz.md#disjunctive)
- [distinct](Lz.md#distinct)
- [empty](Lz.md#empty)
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
- [orderBy](Lz.md#orderby)
- [orderByDescending](Lz.md#orderbydescending)
- [partition](Lz.md#partition)
- [prepend](Lz.md#prepend)
- [range](Lz.md#range)
- [repeat](Lz.md#repeat)
- [repeatAction](Lz.md#repeataction)
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
- [toArray](Lz.md#toarray)
- [toDictionary](Lz.md#todictionary)
- [toIterable](Lz.md#toiterable)
- [toSet](Lz.md#toset)
- [union](Lz.md#union)
- [where](Lz.md#where)
- [zip](Lz.md#zip)

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

[src/Lz.ts:22](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L22)

## Properties

### identityFunction

▪ `Static` `Readonly` **identityFunction**: `IdentityFunction`<`any`\>

#### Defined in

[src/Lz.ts:18](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L18)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Implementation of

IterableIterator.\_\_@iterator@78

#### Defined in

[src/Lz.ts:1632](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1632)

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

[src/Lz.ts:1186](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1186)

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

[src/Lz.ts:1369](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1369)

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

[src/Lz.ts:1343](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1343)

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

[src/Lz.ts:56](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L56)

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

[src/Lz.ts:1280](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1280)

▸ **average**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1281](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1281)

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

[src/Lz.ts:116](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L116)

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

[src/Lz.ts:1312](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1312)

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

[src/Lz.ts:146](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L146)

___

### disjunctive

▸ **disjunctive**(`second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the symmetrical set difference of two sequences by using the specified <i>ComparatorFunction<T></i> to
compare values.

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

A sequence that contains the symmetrical set difference of the elements of two sequences.

#### Defined in

[src/Lz.ts:190](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L190)

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

[src/Lz.ts:230](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L230)

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

[src/Lz.ts:283](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L283)

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

[src/Lz.ts:1473](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1473)

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

[src/Lz.ts:1506](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1506)

___

### forEach

▸ **forEach**(`action`): `void`

Performs the specified action on each element of the sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `Action`<`T`\> | The action delegate to perform on each element of the sequence. |

#### Returns

`void`

#### Defined in

[src/Lz.ts:321](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L321)

___

### groupBy

▸ **groupBy**<`K`\>(`keySelector`): [`LzGrouped`](LzGrouped.md)<`K`, `T`[]\>

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

[`LzGrouped`](LzGrouped.md)<`K`, `T`[]\>

A Map where each entry contains a collection of objects of type T.

#### Defined in

[src/Lz.ts:1026](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1026)

▸ **groupBy**<`K`, `V`\>(`keySelector`, `elementSelector?`): [`LzGrouped`](LzGrouped.md)<`K`, `V`[]\>

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

[`LzGrouped`](LzGrouped.md)<`K`, `V`[]\>

A Map where each entry contains a collection of objects of type V.

#### Defined in

[src/Lz.ts:1034](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1034)

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

[src/Lz.ts:342](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L342)

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

[src/Lz.ts:381](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L381)

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

[src/Lz.ts:426](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L426)

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

[src/Lz.ts:474](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L474)

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

[src/Lz.ts:512](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L512)

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

[src/Lz.ts:1211](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1211)

▸ **max**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1212](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1212)

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

[src/Lz.ts:1234](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1234)

▸ **min**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1235](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1235)

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

[src/Lz.ts:1636](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1636)

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

[src/Lz.ts:558](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L558)

▸ **orderBy**<`V`\>(`selector`, `descending`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending or descending order according to a key.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |
| `descending` | `boolean` | Whether to sort in descending order rather than ascending. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:566](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L566)

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

[src/Lz.ts:574](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L574)

▸ **orderBy**<`V`\>(`selector`, `comparator`, `descending`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending or descending order by using a specified comparator.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `SelectorFunctionNoIndex`<`T`, `V`\> | A function to extract a key from an element. |
| `comparator` | `ComparatorFunction`<`V`\> | A ComparatorFunction<V> to compare keys. |
| `descending` | `boolean` | Whether to sort in descending order rather than ascending. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:583](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L583)

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

[src/Lz.ts:642](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L642)

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

[src/Lz.ts:650](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L650)

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

[src/Lz.ts:1085](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1085)

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

[src/Lz.ts:88](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L88)

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

[src/Lz.ts:1640](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1640)

___

### reverse

▸ **reverse**(): [`Lz`](Lz.md)<`T`\>

Inverts the order of the elements in a sequence.

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence whose elements correspond to those of the input sequence in reverse order.

#### Defined in

[src/Lz.ts:756](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L756)

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

[src/Lz.ts:848](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L848)

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

[src/Lz.ts:875](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L875)

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

[src/Lz.ts:784](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L784)

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

[src/Lz.ts:1398](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1398)

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

[src/Lz.ts:1436](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1436)

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

[src/Lz.ts:930](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L930)

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

[src/Lz.ts:991](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L991)

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

[src/Lz.ts:1257](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1257)

▸ **sum**(`selector?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `SelectorFunction`<`number`, `number`\> |

#### Returns

`number`

#### Defined in

[src/Lz.ts:1258](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1258)

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

[src/Lz.ts:902](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L902)

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

[src/Lz.ts:959](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L959)

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

[src/Lz.ts:1644](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1644)

___

### toArray

▸ **toArray**(): `T`[]

Creates an array from a IterableIterator<T>.

#### Returns

`T`[]

An array that contains the elements from the input sequence.

#### Defined in

[src/Lz.ts:1602](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1602)

___

### toDictionary

▸ **toDictionary**<`T1`, `T2`, `T`\>(): `Map`<`T1`, `T2`\>

Creates a Map from a sequence of IterableIterator<[T1, T2]>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | `T1` |
| `T2` | `T2` |
| `T` | extends [`T1`, `T2`] |

#### Returns

`Map`<`T1`, `T2`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1533](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1533)

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

[src/Lz.ts:1540](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1540)

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

[src/Lz.ts:1548](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1548)

___

### toIterable

▸ **toIterable**(): [`Lz`](Lz.md)<`T`\>

Returns the input typed as LzIterable<T>.

#### Returns

[`Lz`](Lz.md)<`T`\>

The input sequence typed as LzIterable<T>.

#### Defined in

[src/Lz.ts:30](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L30)

___

### toSet

▸ **toSet**(): `Set`<`T`\>

Creates a Set<T> from an IterableIterator<T>.

#### Returns

`Set`<`T`\>

A Set<T> that contains values of type T selected from the input sequence.

#### Defined in

[src/Lz.ts:1619](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1619)

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

[src/Lz.ts:1125](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1125)

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

[src/Lz.ts:819](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L819)

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
| `second` | `LzIterable`<`U`\> | The second sequence to merge. |
| `resultSelector` | (`first`: `T`, `second`: `U`) => `V` | A function that specifies how to merge the elements from the two sequences. |

#### Returns

[`Lz`](Lz.md)<`V`\>

A sequence that contains merged elements of two input sequences.

#### Defined in

[src/Lz.ts:1151](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1151)

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

[src/Lz.ts:1197](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1197)

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

[src/Lz.ts:1380](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1380)

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

[src/Lz.ts:1353](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1353)

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

[src/Lz.ts:70](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L70)

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

[src/Lz.ts:1292](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1292)

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

[src/Lz.ts:1293](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1293)

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

[src/Lz.ts:126](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L126)

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

[src/Lz.ts:1322](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1322)

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

[src/Lz.ts:162](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L162)

___

### disjunctive

▸ `Static` **disjunctive**<`T`\>(`first`, `second`, `comparator?`): [`Lz`](Lz.md)<`T`\>

Produces the symmetrical set difference of two sequences by using the specified <i>ComparatorFunction<T></i> to
compare values.

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
| `first` | `LzIterable`<`T`\> | A sequence whose elements that also occur in the second sequence will cause those elements to be removed from the returned sequence. |
| `second` | `LzIterable`<`T`\> | A sequence whose elements that also occur in the first sequence will cause those elements to be removed from the returned sequence. |
| `comparator?` | `ComparatorFunction`<`T`\> | Optional. A ComparatorFunction<T> to compare values. |

#### Returns

[`Lz`](Lz.md)<`T`\>

A sequence that contains the symmetrical set difference of the elements of two sequences.

#### Defined in

[src/Lz.ts:208](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L208)

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

[src/Lz.ts:244](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L244)

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

[src/Lz.ts:267](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L267)

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

[src/Lz.ts:301](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L301)

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

[src/Lz.ts:1484](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1484)

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

[src/Lz.ts:1517](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1517)

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
| `action` | `Action`<`T`\> |

#### Returns

`void`

#### Defined in

[src/Lz.ts:325](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L325)

___

### groupBy

▸ `Static` **groupBy**<`T`, `K`\>(`source`, `keySelector`): [`LzGrouped`](LzGrouped.md)<`K`, `T`[]\>

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

[`LzGrouped`](LzGrouped.md)<`K`, `T`[]\>

A Map where each entry contains a collection of objects of type V.

#### Defined in

[src/Lz.ts:1046](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1046)

▸ `Static` **groupBy**<`T`, `K`, `V`\>(`source`, `keySelector`, `elementSelector?`): [`LzGrouped`](LzGrouped.md)<`K`, `V`[]\>

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

[`LzGrouped`](LzGrouped.md)<`K`, `V`[]\>

A Map where each entry contains a collection of objects of type V.

#### Defined in

[src/Lz.ts:1056](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1056)

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

[src/Lz.ts:357](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L357)

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

[src/Lz.ts:397](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L397)

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

[src/Lz.ts:447](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L447)

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

[src/Lz.ts:485](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L485)

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

[src/Lz.ts:523](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L523)

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

[src/Lz.ts:1223](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1223)

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

[src/Lz.ts:1224](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1224)

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

[src/Lz.ts:1246](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1246)

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

[src/Lz.ts:1247](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1247)

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

[src/Lz.ts:599](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L599)

▸ `Static` **orderBy**<`T`, `V`\>(`source`, `selector`, `descending`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending or descending order according to a key.

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
| `descending` | `boolean` | Whether to sort in descending order rather than ascending. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:608](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L608)

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

[src/Lz.ts:617](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L617)

▸ `Static` **orderBy**<`T`, `V`\>(`source`, `selector`, `comparator`, `descending`): `LzOrdered`<`T`, `V`\>

Sorts the elements of a sequence in ascending or descending order by using a specified comparator.

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
| `descending` | `boolean` | Whether to sort in descending order rather than ascending. |

#### Returns

`LzOrdered`<`T`, `V`\>

A sequence whose elements are sorted according to a key.

#### Defined in

[src/Lz.ts:627](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L627)

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

[src/Lz.ts:662](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L662)

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

[src/Lz.ts:671](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L671)

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

[src/Lz.ts:1096](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1096)

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

[src/Lz.ts:102](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L102)

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

[src/Lz.ts:688](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L688)

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

[src/Lz.ts:715](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L715)

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

[src/Lz.ts:739](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L739)

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

[src/Lz.ts:765](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L765)

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

[src/Lz.ts:858](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L858)

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

[src/Lz.ts:886](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L886)

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

[src/Lz.ts:797](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L797)

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

[src/Lz.ts:1411](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1411)

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

[src/Lz.ts:1451](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1451)

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

[src/Lz.ts:940](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L940)

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

[src/Lz.ts:1002](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1002)

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

[src/Lz.ts:1269](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1269)

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

[src/Lz.ts:1270](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1270)

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

[src/Lz.ts:912](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L912)

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

[src/Lz.ts:970](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L970)

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

[src/Lz.ts:1611](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1611)

___

### toDictionary

▸ `Static` **toDictionary**<`T1`, `T2`\>(`source`): `Map`<`T1`, `T2`\>

Creates a Map from a sequence of IterableIterator<[T1, T2]>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<[`T1`, `T2`]\> | The sequence to create a Map<K, T> from. |

#### Returns

`Map`<`T1`, `T2`\>

A Map that contains keys and values.

#### Defined in

[src/Lz.ts:1558](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1558)

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

[src/Lz.ts:1566](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1566)

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

[src/Lz.ts:1576](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1576)

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

[src/Lz.ts:39](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L39)

___

### toSet

▸ `Static` **toSet**<`T`\>(`source`): `Set`<`T`\>

Creates a Set<T> from an IterableIterator<T>.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `LzIterable`<`T`\> | An IterableIterator<T> to create a Set<T> from. |

#### Returns

`Set`<`T`\>

A Set<T> that contains values of type T selected from the input sequence.

#### Defined in

[src/Lz.ts:1628](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1628)

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

[src/Lz.ts:1140](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1140)

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

[src/Lz.ts:830](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L830)

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
| `second` | `LzIterable`<`U`\> | The second sequence to merge. |
| `resultSelector` | (`first`: `T`, `second`: `U`) => `V` | A function that specifies how to merge the elements from the two sequences. |

#### Returns

[`Lz`](Lz.md)<`V`\>

A sequence that contains merged elements of two input sequences.

#### Defined in

[src/Lz.ts:1163](https://github.com/neoscrib/2a/blob/876b950/src/Lz.ts#L1163)
