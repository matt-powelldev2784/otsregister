import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockProfileData from './components/Profile/__tests__/mocks/mockProfileData.json';
import mockRecentGames from './components/Games/Table/UserTable/__tests__/mocks/mockRecentGames.json';
var server = setupServer(rest.get("".concat(process.env.REACT_APP_API_ADDRESS, "/api/profile/currentProfile"), function (req, res, ctx) {
    return res(ctx.status(200), ctx.json(mockProfileData));
}), rest.get("".concat(process.env.REACT_APP_API_ADDRESS, "/api/games/recentgames"), function (req, res, ctx) {
    return res(ctx.status(200), ctx.json(mockRecentGames));
}), rest.get('*', function (req, res, ctx) {
    console.error("Please add request handler for ".concat(req.url.toString()));
    return res.json({
        error: 'Please add request handler'
    });
}));
beforeAll(function () {
    server.listen();
});
afterAll(function () {
    server.close();
});
afterEach(function () {
    server.resetHandlers();
});
export { rest, server };
