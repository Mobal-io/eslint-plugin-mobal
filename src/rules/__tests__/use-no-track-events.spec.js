// to test these, run `node tests/eslint/__tests__/use-no-track-events.spec.js` from the root of the project
/* eslint-disable @typescript-eslint/no-var-requires */
import { RuleTester } from 'eslint'
import useNoTrackEventsRule from '../use-no-track-events.js'

const ruleTester = new RuleTester()

ruleTester.run('use-no-track-events', useNoTrackEventsRule, {
    valid: [
        {
            code: 'trackEvent(\'event-name\')',
        },
    ],
    invalid: [
        {
            code: 'this.$posthog.capture(\'event-name\')',
            output: 'trackEvent(\'event-name\')',
            errors: [
                {
                    message: '"this.$posthog.capture" should not be used, use trackEvent',
                },
            ],
        },
        {
            code: 'this.$ga.push(\'event-name\')',
            output: 'trackEvent(\'event-name\')',
            errors: [
                {
                    message: '"this.$ga.push" should not be used, use trackEvent',
                },
            ],
        },
        {
            code: 'Vue.$plantrack.track(\'event-name\')',
            output: 'trackEvent(\'event-name\')',
            errors: [
                {
                    message: '"Vue.$plantrack.track" should not be used, use trackEvent',
                },
            ],
        }],
})
