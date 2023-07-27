/* eslint-disable no-duplicate-imports */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// eslint-disable-next-line consistent-return
const middleware = (request: NextRequest) => {
  const url = request.nextUrl.clone();

  if (url.pathname === '/live') {
    url.pathname = '/';

    return NextResponse.redirect(url);
  }
};

export default middleware;
