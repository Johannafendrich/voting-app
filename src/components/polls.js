const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/Johannafendrich/voting-app/polls';

export async function getPoll(pollId) {
  const response = await fetch(`${POLLS_API_URL}/${pollId}`);
  const poll = await response.json();
  return poll;
}
