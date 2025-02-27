import assert from 'assert'
import plugin from '../index.js'


describe('plugin', () => {
    it('it should build config', () => {
        assert.ok(plugin.configs)
    })
})
