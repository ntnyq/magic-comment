// This file is generated by `vscode-ext-gen`. Do not modify manually.
// @see https://github.com/antfu/vscode-ext-gen

// Meta info
export const publisher = "ntnyq"
export const name = "magic-comment"
export const version = "0.0.0"
export const displayName = "Magic Comment"
export const description = "Add annotations to magic comments"
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = never

/**
 * Commands map registed by `ntnyq.magic-comment`
 */
export const commands = {
} satisfies Record<string, CommandKey>

/**
 * Type union of all configs
 */
export type ConfigKey = 
  | "magic-comment.enable"
  | "magic-comment.include"
  | "magic-comment.exclude"

export interface ConfigKeyTypeMap {
  "magic-comment.enable": boolean,
  "magic-comment.include": string[],
  "magic-comment.exclude": string[],
}

export interface ConfigShorthandMap {
  enable: "magic-comment.enable",
  include: "magic-comment.include",
  exclude: "magic-comment.exclude",
}

export interface ConfigItem<T extends keyof ConfigKeyTypeMap> {
  key: T,
  default: ConfigKeyTypeMap[T],
}


/**
 * Configs map registered by `ntnyq.magic-comment`
 */
export const configs = {
  /**
   * Enable extension
   * @key `magic-comment.enable`
   * @default `true`
   * @type `boolean`
   */
  enable: {
    key: "magic-comment.enable",
    default: true,
  } as ConfigItem<"magic-comment.enable">,
  /**
   * Include files
   * @key `magic-comment.include`
   * @default `[]`
   * @type `array`
   */
  include: {
    key: "magic-comment.include",
    default: [],
  } as ConfigItem<"magic-comment.include">,
  /**
   * Exclude files
   * @key `magic-comment.exclude`
   * @default `[]`
   * @type `array`
   */
  exclude: {
    key: "magic-comment.exclude",
    default: [],
  } as ConfigItem<"magic-comment.exclude">,
}

export interface ScopedConfigKeyTypeMap {
  "enable": boolean,
  "include": string[],
  "exclude": string[],
}

export const scopedConfigs = {
  scope: "magic-comment",
  defaults: {
    "enable": true,
    "include": [],
    "exclude": [],
  } satisfies ScopedConfigKeyTypeMap,
}

export interface NestedConfigs {
  "magic-comment": {
    "enable": boolean,
    "include": string[],
    "exclude": string[],
  },
}

export interface NestedScopedConfigs {
  "enable": boolean,
  "include": string[],
  "exclude": string[],
}

