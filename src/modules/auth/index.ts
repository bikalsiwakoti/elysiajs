import { Elysia, t } from "elysia";
import { prisma } from "../../lib/prisma";

const auth = new Elysia().get("/getLogin", async() => {
    const user = await prisma.user.findMany();
    return { message: "ok", data: user };
});

export default auth;