"use client";

import { io } from "socket.io-client";

export const ws = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
