[2a](../README.md) / Comparator

# Class: Comparator

## Table of contents

### Constructors

- [constructor](Comparator.md#constructor)

### Methods

- [comparing](Comparator.md#comparing)
- [defaultComparator](Comparator.md#defaultcomparator)
- [selector](Comparator.md#selector)

## Constructors

### constructor

• **new Comparator**()

## Methods

### comparing

▸ `Static` **comparing**<`T`, `U`\>(`selector`): `ComparatorFunction`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `SelectorFunctionNoIndex`<`T`, `U`\> \| keyof `T` |

#### Returns

`ComparatorFunction`<`T`\>

#### Defined in

[src/Comparator.ts:38](https://github.com/neoscrib/2a/blob/f9271e7/src/Comparator.ts#L38)

___

### defaultComparator

▸ `Static` **defaultComparator**<`T`\>(`a`, `b`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

`number`

#### Defined in

[src/Comparator.ts:8](https://github.com/neoscrib/2a/blob/f9271e7/src/Comparator.ts#L8)

___

### selector

▸ `Static` **selector**<`T`, `U`\>(`selector`): `SelectorFunctionNoIndex`<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | keyof `T` |

#### Returns

`SelectorFunctionNoIndex`<`T`, `U`\>

#### Defined in

[src/Comparator.ts:48](https://github.com/neoscrib/2a/blob/f9271e7/src/Comparator.ts#L48)
