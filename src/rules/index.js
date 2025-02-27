import noVueIgnore from './no-vue-ignore.js'
import useCommentAboveFeatureFlag from './use-comment-above-featureflag.js'
import useComputedInsteadOfInlineIf from './use-computed-instead-of-inline-if.js'
import useConsistentTestNaming from './use-consistent-test-naming.js'
import useMethodInsteadOfSemicolon from './use-method-instead-of-semicolon.js'
import useNoRootEvents from './use-no-root-events.js'
import useNoTrackEvents from './use-no-track-events.js'

const rules = {
    'no-vue-ignore': noVueIgnore,
    'use-comment-above-featureflag': useCommentAboveFeatureFlag,
    'use-computed-instead-of-inline-if': useComputedInsteadOfInlineIf,
    'use-consistent-test-naming': useConsistentTestNaming,
    'use-method-instead-of-semicolon': useMethodInsteadOfSemicolon,
    'use-no-root-events': useNoRootEvents,
    'use-no-track-events': useNoTrackEvents,
}

export default rules
