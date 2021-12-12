[2a](../README.md) / [Exports](../modules.md) / SortedMap

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

- [[Symbol.toStringTag]](SortedMap.md#[symbol.tostringtag])
- [comparator](SortedMap.md#comparator)
- [size](SortedMap.md#size)
- [sorted](SortedMap.md#sorted)
- [sortedKeys](SortedMap.md#sortedkeys)
- [[Symbol.species]](SortedMap.md#[symbol.species])

### Methods

- [[Symbol.iterator]](SortedMap.md#[symbol.iterator])
- [clear](SortedMap.md#clear)
- [compare](SortedMap.md#compare)
- [delete](SortedMap.md#delete)
- [entries](SortedMap.md#entries)
- [firstKey](SortedMap.md#firstkey)
- [forEach](SortedMap.md#foreach)
- [get](SortedMap.md#get)
- [getSortedKeys](SortedMap.md#getsortedkeys)
- [has](SortedMap.md#has)
- [headMap](SortedMap.md#headmap)
- [headMapInternal](SortedMap.md#headmapinternal)
- [keys](SortedMap.md#keys)
- [keysFrom](SortedMap.md#keysfrom)
- [keysTo](SortedMap.md#keysto)
- [lastKey](SortedMap.md#lastkey)
- [next](SortedMap.md#next)
- [return](SortedMap.md#return)
- [set](SortedMap.md#set)
- [subMap](SortedMap.md#submap)
- [tailMap](SortedMap.md#tailmap)
- [tailMapInternal](SortedMap.md#tailmapinternal)
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

[src/SortedMap.ts:9](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L9)

• **new SortedMap**<`K`, `V`\>(`entries?`, `comparator?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | `IterableIterator`<[`K`, `V`]\> |
| `comparator?` | (`a`: `K`, `b`: `K`, `c?`: `V`, `d?`: `V`) => `number` |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/SortedMap.ts:10](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L10)

## Properties

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### comparator

• `Private` `Readonly` **comparator**: (`a`: `K`, `b`: `K`, `c?`: `V`, `d?`: `V`) => `number`

#### Type declaration

▸ (`a`, `b`, `c?`, `d?`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `K` |
| `b` | `K` |
| `c?` | `V` |
| `d?` | `V` |

##### Returns

`number`

#### Defined in

[src/SortedMap.ts:5](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L5)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### sorted

• `Private` **sorted**: `boolean` = `false`

#### Defined in

[src/SortedMap.ts:6](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L6)

___

### sortedKeys

• `Private` **sortedKeys**: `K`[] = `[]`

#### Defined in

[src/SortedMap.ts:7](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L7)

___

### [Symbol.species]

▪ `Static` `Readonly` **[Symbol.species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:312

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Implementation of

IterableIterator.\_\_@iterator

#### Overrides

Map.\_\_@iterator

#### Defined in

[src/SortedMap.ts:95](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L95)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

[src/SortedMap.ts:67](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L67)

___

### compare

▸ `Private` **compare**(`a`, `b`, `c?`, `d?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `K` |
| `b` | `K` |
| `c` | `V` |
| `d` | `V` |

#### Returns

`number`

#### Defined in

[src/SortedMap.ts:22](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L22)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

[src/SortedMap.ts:72](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L72)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Overrides

Map.entries

#### Defined in

[src/SortedMap.ts:99](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L99)

___

### firstKey

▸ **firstKey**(): `K`

#### Returns

`K`

#### Defined in

[src/SortedMap.ts:26](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L26)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Overrides

Map.forEach

#### Defined in

[src/SortedMap.ts:149](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L149)

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

### getSortedKeys

▸ `Private` **getSortedKeys**(): `K`[]

#### Returns

`K`[]

#### Defined in

[src/SortedMap.ts:111](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L111)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `toKey` | `K` |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Defined in

[src/SortedMap.ts:57](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L57)

___

### headMapInternal

▸ `Private` **headMapInternal**(`toKey`): `IterableIterator`<[`K`, `V`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `toKey` | `K` |

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

[src/SortedMap.ts:61](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L61)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

#### Returns

`IterableIterator`<`K`\>

#### Overrides

Map.keys

#### Defined in

[src/SortedMap.ts:105](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L105)

___

### keysFrom

▸ `Private` **keysFrom**(`fromKey`): `IterableIterator`<`K`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromKey` | `K` |

#### Returns

`IterableIterator`<`K`\>

#### Defined in

[src/SortedMap.ts:119](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L119)

___

### keysTo

▸ `Private` **keysTo**(`toKey`): `IterableIterator`<`K`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `toKey` | `K` |

#### Returns

`IterableIterator`<`K`\>

#### Defined in

[src/SortedMap.ts:131](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L131)

___

### lastKey

▸ **lastKey**(): `K`

#### Returns

`K`

#### Defined in

[src/SortedMap.ts:34](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L34)

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

[src/SortedMap.ts:155](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L155)

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

[src/SortedMap.ts:159](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L159)

___

### set

▸ **set**(`key`, `value`): [`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Overrides

Map.set

#### Defined in

[src/SortedMap.ts:77](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L77)

___

### subMap

▸ **subMap**(`fromKey`, `toKey`): [`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromKey` | `K` |
| `toKey` | `K` |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Defined in

[src/SortedMap.ts:53](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L53)

___

### tailMap

▸ **tailMap**(`fromKey`): [`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromKey` | `K` |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Defined in

[src/SortedMap.ts:43](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L43)

___

### tailMapInternal

▸ `Private` **tailMapInternal**(`fromKey`): `IterableIterator`<[`K`, `V`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromKey` | `K` |

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

[src/SortedMap.ts:47](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L47)

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

[src/SortedMap.ts:163](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L163)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

#### Returns

`IterableIterator`<`V`\>

#### Overrides

Map.values

#### Defined in

[src/SortedMap.ts:143](https://github.com/neoscrib/2a/blob/324b65a/src/SortedMap.ts#L143)
