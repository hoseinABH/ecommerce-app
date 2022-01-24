type fetchParams = {
  query: string;
};

const fetchApi = async ({ query }: fetchParams) => {
  const url = 'http://localhost:4000/graphql';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};

export { fetchApi };
