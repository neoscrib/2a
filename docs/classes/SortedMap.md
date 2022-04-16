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

[src/SortedMap.ts:9](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L9)

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

[src/SortedMap.ts:10](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L10)

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

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Implementation of

IterableIterator.\_\_@iterator@78

#### Overrides

Map.\_\_@iterator@78

#### Defined in

[src/SortedMap.ts:95](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L95)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

[src/SortedMap.ts:67](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L67)

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

[src/SortedMap.ts:72](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L72)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Overrides

Map.entries

#### Defined in

[src/SortedMap.ts:99](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L99)

___

### firstKey

▸ **firstKey**(): `K`

#### Returns

`K`

#### Defined in

[src/SortedMap.ts:26](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L26)

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

[src/SortedMap.ts:149](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L149)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `toKey` | `K` |

#### Returns

[`SortedMap`](SortedMap.md)<`K`, `V`\>

#### Defined in

[src/SortedMap.ts:57](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L57)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

#### Returns

`IterableIterator`<`K`\>

#### Overrides

Map.keys

#### Defined in

[src/SortedMap.ts:105](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L105)

___

### lastKey

▸ **lastKey**(): `K`

#### Returns

`K`

#### Defined in

[src/SortedMap.ts:34](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L34)

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

[src/SortedMap.ts:155](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L155)

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

[src/SortedMap.ts:159](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L159)

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

[src/SortedMap.ts:77](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L77)

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

[src/SortedMap.ts:53](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L53)

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

[src/SortedMap.ts:43](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L43)

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

[src/SortedMap.ts:163](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L163)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

#### Returns

`IterableIterator`<`V`\>

#### Overrides

Map.values

#### Defined in

[src/SortedMap.ts:143](https://github.com/neoscrib/2a/blob/f53e49a/src/SortedMap.ts#L143)
