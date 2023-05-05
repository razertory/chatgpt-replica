

export const config = {
  runtime: 'edge',
};

const validCodes = ['gusu', 'kotaro']

const handler = async (req: Request): Promise<Response> => {
  const {accessCode} = await req.json()
  return new Response(JSON.stringify(validCodes.includes(accessCode)), { status: 200 });
}

export default handler;