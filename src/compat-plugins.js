// @ts-check

import importPlugin from 'eslint-plugin-import'
import importNewlines from 'eslint-plugin-import-newlines'
import newlineDestructuring from 'eslint-plugin-newline-destructuring'

import withEslint10Compat from './eslint10-compat.js'

/**
 * The third-party plugins we bundle that have no eslint 10 compatible release
 * we can move to yet, wrapped so their rules also run on eslint 10.
 *
 * Every config has to register the same object under a given plugin name, so
 * these are wrapped exactly once here and shared, rather than per config.
 */

export const importCompat = withEslint10Compat(importPlugin)
export const importNewlinesCompat = withEslint10Compat(importNewlines)
export const newlineDestructuringCompat = withEslint10Compat(newlineDestructuring)
