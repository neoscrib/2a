[2a](../README.md) / [Exports](../modules.md) / StringBuilder

# Class: StringBuilder

## Table of contents

### Constructors

- [constructor](StringBuilder.md#constructor)

### Properties

- [content](StringBuilder.md#content)
- [indentConfig](StringBuilder.md#indentconfig)

### Accessors

- [length](StringBuilder.md#length)

### Methods

- [append](StringBuilder.md#append)
- [appendLines](StringBuilder.md#appendlines)
- [indent](StringBuilder.md#indent)
- [newline](StringBuilder.md#newline)
- [outdent](StringBuilder.md#outdent)
- [toString](StringBuilder.md#tostring)

## Constructors

### constructor

• **new StringBuilder**(`content`, `indentSize?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `content` | `string` | `undefined` |
| `indentSize` | `number` | `4` |

#### Defined in

[src/StringBuilder.ts:13](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L13)

## Properties

### content

• `Private` `Readonly` **content**: `string`[] = `[]`

#### Defined in

[src/StringBuilder.ts:6](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L6)

___

### indentConfig

• `Private` `Readonly` **indentConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `level` | `number` |
| `one` | `string` |

#### Defined in

[src/StringBuilder.ts:7](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L7)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/StringBuilder.ts:76](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L76)

## Methods

### append

▸ **append**(...`content`): [`StringBuilder`](StringBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...content` | `string`[] |

#### Returns

[`StringBuilder`](StringBuilder.md)

#### Defined in

[src/StringBuilder.ts:22](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L22)

___

### appendLines

▸ **appendLines**(...`content`): [`StringBuilder`](StringBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...content` | `string`[] |

#### Returns

[`StringBuilder`](StringBuilder.md)

#### Defined in

[src/StringBuilder.ts:27](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L27)

___

### indent

▸ **indent**(): [`StringBuilder`](StringBuilder.md)

#### Returns

[`StringBuilder`](StringBuilder.md)

#### Defined in

[src/StringBuilder.ts:36](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L36)

___

### newline

▸ **newline**(`n?`): [`StringBuilder`](StringBuilder.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | `1` |

#### Returns

[`StringBuilder`](StringBuilder.md)

#### Defined in

[src/StringBuilder.ts:64](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L64)

___

### outdent

▸ **outdent**(): [`StringBuilder`](StringBuilder.md)

#### Returns

[`StringBuilder`](StringBuilder.md)

#### Defined in

[src/StringBuilder.ts:51](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L51)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/StringBuilder.ts:72](https://github.com/neoscrib/2a/blob/324b65a/src/StringBuilder.ts#L72)
