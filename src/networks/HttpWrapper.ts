const request = async (
  method: string | undefined,
  url: RequestInfo,
  body: BodyInit_ | undefined = null,
  customHeaders: HeadersInit_ | undefined = {},
) => {
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders, // Merge any custom headers (e.g., Authorization)
  };

  let options: RequestInit = {
    method: method,
    headers: headers,
  };
  if (body) options.body = body;

  try {
    const controller = new AbortController(); // To handle timeout
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(url, {...options, signal: controller.signal});

    clearTimeout(timeoutId); // Clear timeout when request is successful

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    return await response.json(); // Convert response to JSON
  } catch (error) {
    if (error instanceof Error) {
      console.error(`HTTP ${method} Request Error:`, error.message);
    } else {
      console.error('Unknown error:', error);
    }

    throw error;
  }
};

// Export HTTP methods
const HttpWrapper = {
  GET: (
    url: RequestInfo,
    body?: BodyInit_ | undefined,
    customHeaders?: HeadersInit_ | undefined,
  ) => request('GET', url, null, customHeaders),
  POST: (
    url: RequestInfo,
    body: BodyInit_ | undefined,
    customHeaders: HeadersInit_ | undefined,
  ) => request('POST', url, body, customHeaders),
  PUT: (
    url: RequestInfo,
    body: BodyInit_ | undefined,
    customHeaders: HeadersInit_ | undefined,
  ) => request('PUT', url, body, customHeaders),
  DELETE: (
    url: RequestInfo,
    body: BodyInit_ | undefined,
    customHeaders: HeadersInit_ | undefined,
  ) => request('DELETE', url, null, customHeaders),
};

export default HttpWrapper;
