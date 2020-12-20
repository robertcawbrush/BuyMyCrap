export function getPosts(url: string) {
	return fetch(url)
			.then(handleResponse)
			.catch(handleError);
}

export function getPost(url: string, id: number) {
	return fetch(url + id)
			.then(handleResponse)
			.catch(handleError);
}

async function handleResponse(response:any) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was bad: 400");
}

function handleError(error: any) {
  // eslint-disable-next-line no-console
  console.error("API call failed : " + error);
  throw error;
}