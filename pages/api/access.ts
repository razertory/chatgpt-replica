export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  const {accessCode} = await req.json()
  return new Response(JSON.stringify(accessCode == "gusu"), { status: 200 });
}

export default handler;