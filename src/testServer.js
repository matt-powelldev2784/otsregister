import { rest } from 'msw'
import { setupServer } from 'msw/node'

import mockProfileData from './components/Profile/__tests__/mocks/mockProfileData.json'

const server = setupServer(
    rest.get(`${process.env.REACT_APP_API_ADDRESS}/api/profile/currentProfile`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockProfileData))
    }),
    rest.get('*', (req, res, ctx) => {
        console.error(`Please add request handler for ${req.url.toString()}`)
        return res.json({
            error: 'Please add request handler'
        })
    })
)

beforeAll(() => {
    server.listen()
})
afterAll(() => {
    server.close()
})
afterEach(() => {
    server.resetHandlers()
})

export { rest, server }
