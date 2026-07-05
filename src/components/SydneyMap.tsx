"use client";

import AnimateOnScroll from "./AnimateOnScroll";

/**
 * Minimalist Greater Sydney illustration.
 * Harbour, peninsula, and coastline proportions are derived from real
 * geography so the silhouette reads immediately as Sydney.
 */
export default function SydneyMap() {
  const cbd = { x: 318, y: 198 };

  const stroke = {
    region: 1,
    coast: 1,
    divider: 1,
  };

  return (
    <AnimateOnScroll direction="right" delay={200}>
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/[0.06] bg-[#111111] sm:aspect-square lg:aspect-[4/5]">
        <svg
          viewBox="0 0 440 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full p-8 sm:p-10 lg:p-12"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="cbdGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c4a35a" stopOpacity="0.45" />
              <stop offset="65%" stopColor="#c4a35a" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#c4a35a" stopOpacity="0" />
            </radialGradient>
            <filter id="cbdBlur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="filmGrain" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.72"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0.038 0"
                result="grain"
              />
              <feBlend in="SourceGraphic" in2="grain" mode="overlay" />
            </filter>
          </defs>

          <g filter="url(#filmGrain)">
            {/* Greater Sydney boundary */}
            <path
              d="M 58 108
                 C 46 162, 42 228, 50 296
                 C 58 360, 78 414, 112 448
                 C 152 484, 206 494, 258 478
                 C 304 464, 342 432, 364 388
                 C 382 352, 392 308, 394 262
                 C 396 216, 388 172, 368 136
                 C 346 100, 310 72, 268 58
                 C 224 44, 174 46, 132 62
                 C 94 76, 68 98, 58 108 Z"
              stroke="#a8a4a0"
              strokeWidth={stroke.region}
              strokeLinejoin="round"
              opacity="0.2"
            />

            {/* ── Northern Beaches peninsula ── */}
            <path
              d="M 326 158
                 C 334 140, 342 118, 346 94
                 C 350 72, 348 52, 338 38
                 C 328 26, 312 22, 296 28
                 C 282 34, 272 46, 268 62
                 C 264 78, 268 96, 278 112
                 C 288 126, 302 136, 318 142
                 C 324 146, 326 152, 326 158 Z"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinejoin="round"
              opacity="0.34"
            />

            {/* Peninsula east coast (Pacific) */}
            <path
              d="M 326 158
                 C 336 130, 344 100, 346 68
                 C 348 48, 342 32, 328 24"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.36"
            />

            {/* Pittwater west edge */}
            <path
              d="M 326 158
                 C 312 148, 298 132, 290 114
                 C 284 100, 284 84, 292 68
                 C 298 56, 308 46, 318 40"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* North Shore & western interior outline */}
            <path
              d="M 274 152
                 C 248 148, 222 154, 200 168
                 C 176 184, 158 206, 148 232
                 C 136 262, 130 296, 130 332
                 C 130 368, 138 400, 154 426
                 C 172 452, 198 468, 228 474
                 C 258 480, 288 472, 312 454
                 C 334 438, 348 414, 354 386
                 C 360 358, 358 328, 348 300
                 C 338 272, 320 250, 298 236
                 C 284 226, 272 212, 266 196
                 C 260 180, 262 164, 274 152 Z"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinejoin="round"
              opacity="0.32"
            />

            {/* ── Sydney Harbour (iconic fork opening east) ── */}
            <path
              d="M 354 148
                 C 362 154, 368 164, 370 176
                 C 372 186, 370 196, 364 204
                 C 358 212, 348 216, 338 214
                 C 328 212, 320 204, 316 194
                 C 312 184, 314 172, 322 164
                 C 310 162, 298 164, 286 172
                 C 272 182, 260 196, 252 212
                 C 242 232, 236 254, 234 278
                 C 232 300, 234 322, 242 342
                 C 228 334, 216 320, 208 302
                 C 198 278, 194 252, 196 226
                 C 198 200, 208 176, 224 158
                 C 240 142, 260 132, 282 128
                 C 300 124, 318 126, 334 134
                 C 344 140, 350 144, 354 148 Z"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinejoin="round"
              opacity="0.38"
            />

            {/* Harbour mouth — Heads gap (most recognisable feature) */}
            <path
              d="M 354 148
                 C 360 158, 364 172, 364 186
                 C 364 198, 360 208, 352 214"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.42"
            />

            {/* Middle Harbour branch */}
            <path
              d="M 322 164
                 C 312 152, 298 142, 282 138
                 C 268 134, 254 138, 244 148
                 C 234 158, 230 172, 232 186"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* Parramatta River — western arm */}
            <path
              d="M 286 172
                 C 264 176, 242 186, 224 200
                 C 206 214, 192 234, 184 256
                 C 176 278, 174 302, 178 326"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.32"
            />

            {/* ── Eastern Suburbs coast ── */}
            <path
              d="M 364 204
                 C 368 228, 368 254, 362 280
                 C 356 306, 344 330, 326 348
                 C 308 366, 286 378, 262 382"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.34"
            />

            {/* Botany Bay / southern coast */}
            <path
              d="M 262 382
                 C 278 396, 298 406, 320 410
                 C 338 414, 354 408, 364 394"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* Sutherland Shire — Cronulla coast */}
            <path
              d="M 228 474
                 C 248 486, 272 492, 296 488
                 C 316 484, 332 472, 342 454"
              stroke="#a8a4a0"
              strokeWidth={stroke.coast}
              strokeLinecap="round"
              opacity="0.28"
            />

            {/* ── Service region dividers ── */}

            {/* Northern Beaches boundary */}
            <path
              d="M 290 114
                 C 300 122, 312 130, 326 138"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.2"
            />

            {/* North Shore */}
            <path
              d="M 282 128
                 C 260 118, 236 116, 212 124
                 C 188 132, 168 148, 156 168"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.18"
            />

            {/* Hills District */}
            <path
              d="M 132 62
                 C 148 78, 162 98, 170 120
                 C 176 138, 178 158, 174 178"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.18"
            />

            {/* Western Sydney */}
            <path
              d="M 58 108
                 C 86 118, 112 132, 132 152
                 C 148 168, 158 188, 162 210"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.16"
            />
            <path
              d="M 50 296
                 C 82 284, 114 274, 144 270
                 C 174 266, 204 268, 228 276"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.16"
            />

            {/* Inner West */}
            <path
              d="M 224 200
                 C 240 192, 258 188, 276 192
                 C 292 196, 304 206, 310 220"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.2"
            />

            {/* Eastern Suburbs */}
            <path
              d="M 316 194
                 C 324 212, 328 232, 326 254
                 C 324 274, 316 292, 304 306"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.18"
            />

            {/* Sutherland Shire */}
            <path
              d="M 154 426
                 C 182 434, 210 438, 238 436
                 C 264 434, 288 426, 306 412"
              stroke="#a8a4a0"
              strokeWidth={stroke.divider}
              strokeLinecap="round"
              opacity="0.18"
            />

            {/* ── Sydney CBD ── */}
            <circle
              cx={cbd.x}
              cy={cbd.y}
              r="24"
              fill="url(#cbdGlow)"
              filter="url(#cbdBlur)"
            />
            <circle cx={cbd.x} cy={cbd.y} r="2.5" fill="#c4a35a" />
            <circle
              cx={cbd.x}
              cy={cbd.y}
              r="5.5"
              stroke="#c4a35a"
              strokeWidth="0.75"
              opacity="0.3"
            />
          </g>
        </svg>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-black/60 px-6 py-5 backdrop-blur-sm">
          <p className="label-luxury text-[9px] text-gold sm:text-[10px]">
            Servicing Greater Sydney
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
