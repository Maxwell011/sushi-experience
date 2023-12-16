import React from "react";

interface ChatboxIconProps {
  text?: string;
}

const ChatboxIcon: React.FC<ChatboxIconProps> = ({ text }) => {
  return (
    <div className=''>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='350'
        height='140'
        viewBox='0 0 350 169'
        fill='none'
      >
        <g filter='url(#filter0_d_36_214)'>
          <path
            d='M273 65.8392C273 82.4966 258.854 96 241.403 96L59.7221 96C42.2717 96 28.1254 82.4966 28.1254 65.8392C28.1254 57.8074 22.6947 32.3797 26.1506 29.5521C29.6065 26.7245 50.686 35.6785 59.7221 35.6785L241.403 35.6785C258.854 35.6785 273 49.1819 273 65.8392Z'
            fill='#FBFBFB'
          />
          {text && (
            <text
              x='70%'
              y='70%'
              dominantBaseline='middle'
              textAnchor='middle'
              fill='#000000'
              fontSize='20'
              fontWeight='bold'
              className=''
            >
              {text}
            </text>
          )}
        </g>
        <defs>
          <filter
            id='filter0_d_36_214'
            x='0'
            y='0'
            width='350'
            height='169'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='26' dy='22' />
            <feGaussianBlur stdDeviation='25.5' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_36_214'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_36_214'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ChatboxIcon;
