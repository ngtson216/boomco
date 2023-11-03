const HEADERS = {
  DEFAULT_HEADER: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

export const API_URLS = {
  getAllTodo: (_name) => ({
    endPoint: `todo?name=${_name}`,
    method: 'GET',
    headers: HEADERS.DEFAULT_HEADER,
  }),
  addTodo: () => ({
    endPoint: `todo`,
    method: 'POST',
    headers: HEADERS.DEFAULT_HEADER,
  }),
  delTodo: () => ({
    endPoint: `todo`,
    method: 'DELETE',
    headers: HEADERS.DEFAULT_HEADER,
  }),
}