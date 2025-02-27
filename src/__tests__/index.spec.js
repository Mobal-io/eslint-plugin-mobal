import assert from 'assert'
import plugin from '../index.mjs'


describe('plugin', () => {
    it('it should build config', () => {
        assert.ok(plugin.configs)
    })
})
