[2a](../README.md) / SortedMap

# Class: SortedMap<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`SortedMap`**

## Implements

- `IterableIterator`<[`K`, `V`]\>

## Table of contents

### Constructors

- [constructor](SortedMap.md#constructor)

### Properties

- [[toStringTag]](SortedMap.md#[tostringtag])
- [size](SortedMap.md#size)
- [[species]](SortedMap.md#[species])

### Methods

- [[iterator]](SortedMap.md#[iterator])
- [clear](SortedMap.md#clear)
- [delete](SortedMap.md#delete)
- [entries](SortedMap.md#entries)
- [firstKey](SortedMap.md#firstkey)
- [forEach](SortedMap.md#foreach)
- [get](SortedMap.md#get)
- [has](SortedMap.md#has)
- [headMap](SortedMap.md#headmap)
- [keys](SortedMap.md#keys)
- [lastKey](SortedMap.md#lastkey)
- [next](SortedMap.md#next)
- [return](SortedMap.md#return)
- [set](SortedMap.md#set)
- [setIfAbsent](SortedMap.md#setifabsent)
- [subMap](SortedMap.md#submap)
- [tailMap](SortedMap.md#tailmap)
- [throw](SortedMap.md#throw)
- [values](SortedMap.md#values)

## Constructors

### constructor

• **new SortedMap**<`K`, `V`\>()

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/SortedMap.ts:9](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L9)

• **new SortedMap**<`K`, `V`\>(`entries?`, `comparator?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | `Iterable`<readonly [`K`, `V`]\> |
| `comparator?` | (`a`: `K`, `b`: `K`, `c?`: `V`, `d?`: `V`) => `number` |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/SortedMap.ts:10](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L10)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@21

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@589

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

an iterable of entries in the map.

#### Implementation of

IterableIterator.\_\_@iterator@78

#### Overrides

Map.\_\_@iterator@78

#### Defined in

[src/SortedMap.ts:155](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L155)

___

### clear

▸ **clear**(): `void`

The clear() method removes all elements from a Map object.

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

[src/SortedMap.ts:94](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L94)

___

### delete

▸ **delete**(`key`): `boolean`

The delete() method removes the specified element from a Map object by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element to remove from the Map object. |

#### Returns

`boolean`

true if an element in the Map object existed and has been removed, or false if the element does not exist.

#### Overrides

Map.delete

#### Defined in

[src/SortedMap.ts:104](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L104)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

an iterable of key, value pairs for every entry in the map.

#### Overrides

Map.entries

#### Defined in

[src/SortedMap.ts:163](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L163)

___

### firstKey

▸ **firstKey**(): `K`

Returns the first (lowest) key currently in this map.

#### Returns

`K`

the first (lowest) key currently in this map

#### Defined in

[src/SortedMap.ts:31](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L31)

___

### forEach

▸ **forEach**(`callbackFn`, `thisArg?`): `void`

The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `map`: [`SortedMap`](SortedMap.md)<`K`, `V`\>) => `void` | Function to execute for each entry in the map. |
| `thisArg?` | `any` | Value to use as this when executing callback. |

#### Returns

`void`

#### Overrides

Map.forEach

#### Defined in

[src/SortedMap.ts:224](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L224)

___

### get

▸ **get**(`key`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`V`

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### headMap

▸ **headMap**(`toKey`): [`SortedMap`](SortedMap.md)<`K`, `V`\>

Returns a view of the portion of this map whose keys are strictly less than toKey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toKey` | `K` | high endpoint (exclusive) of the keys in the returned map |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

a view of the portion of this map whose keys are strictly less than toKey

#### Defined in

[src/SortedMap.ts:81](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L81)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`K`\>

an iterable of keys in the map

#### Overrides

Map.keys

#### Defined in

[src/SortedMap.ts:173](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L173)

___

### lastKey

▸ **lastKey**(): `K`

Returns the last (highest) key currently in this map.

#### Returns

`K`

the last (highest) key currently in this map

#### Defined in

[src/SortedMap.ts:43](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L43)

___

### next

▸ **next**(`value?`): `IteratorResult`<[`K`, `V`], `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`IteratorResult`<[`K`, `V`], `any`\>

#### Implementation of

IterableIterator.next

#### Defined in

[src/SortedMap.ts:230](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L230)

___

### return

▸ **return**(`value?`): `IteratorResult`<[`K`, `V`], `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`IteratorResult`<[`K`, `V`], `any`\>

#### Implementation of

IterableIterator.return

#### Defined in

[src/SortedMap.ts:234](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L234)

___

### set

▸ **set**(`key`, `value`): [`SortedMap`](SortedMap.md)<`K`, `V`\>

The set() method adds or updates an element with a specified key and a value to a Map object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element to add to the Map object. |
| `value` | `V` | The value of the element to add to the Map object. |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

The Map object.

#### Overrides

Map.set

#### Defined in

[src/SortedMap.ts:118](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L118)

___

### setIfAbsent

▸ **setIfAbsent**(`key`, `value`): `V`

If the specified key is not already associated with a value associates it with the given value and returns that value, else returns the current value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | key with which the specified value is to be associated |
| `value` | `V` | value to be associated with the specified key |

#### Returns

`V`

the previous value associated with the specified key, or the specified value if there was no mapping for the key.

#### Defined in

[src/SortedMap.ts:142](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L142)

___

### subMap

▸ **subMap**(`fromKey`, `toKey`): [`SortedMap`](SortedMap.md)<`K`, `V`\>

Returns a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromKey` | `K` | low endpoint (inclusive) of the keys in the returned map |
| `toKey` | `K` | high endpoint (exclusive) of the keys in the returned map |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive

#### Defined in

[src/SortedMap.ts:72](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L72)

___

### tailMap

▸ **tailMap**(`fromKey`): [`SortedMap`](SortedMap.md)<`K`, `V`\>

Returns a view of the portion of this map whose keys are greater than or equal to fromKey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromKey` | `K` | low endpoint (inclusive) of the keys in the returned map |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

a view of the portion of this map whose keys are greater than or equal to fromKey

#### Defined in

[src/SortedMap.ts:56](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L56)

___

### throw

▸ **throw**(`e?`): `IteratorResult`<[`K`, `V`], `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`IteratorResult`<[`K`, `V`], `any`\>

#### Implementation of

IterableIterator.throw

#### Defined in

[src/SortedMap.ts:238](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L238)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Returns an iterable of values in the map.

#### Returns

`IterableIterator`<`V`\>

an iterable of values in the map.

#### Overrides

Map.values

#### Defined in

[src/SortedMap.ts:213](https://github.com/neoscrib/2a/blob/81ad55f/src/SortedMap.ts#L213)
