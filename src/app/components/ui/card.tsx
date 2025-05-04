'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faX,
  faMessage,
  faEnvelope,
  faComments,
  faCommentSms,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export const Card = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        'w-80 min-h-[26rem] rounded-xl text-black',
        'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
        'p-6 flex flex-col'
      )}
    >
      <h2 className="font-bold text-[10px] text-black">Затемняемый компонент</h2>
      <p className="text-neutral-400 mt-2 text-[8px]">
        Какой то текст для описания содержимого
      </p>
      <div className="flex items-center justify-center">
        <motion.button
          className="flex items-center gap-1 text-[10px] px-2 py-1 my-1 rounded-br-sm text-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
          onClick={() => setOpen(!open)}
          whileTap={{
            scale: 0.95,
            boxShadow: '0px 1px 1px rgba(0,0,0,0.1)',
            transition: { duration: 0.1 },
          }}
        >
          <Image
            className="h-4 w-8 "
            width={200}
            height={200}
            src="/next.svg"
            alt="logo"
          />{' '}
          {open ? 'Скрыть' : 'Показать'}
          <FontAwesomeIcon icon={faX} />
        </motion.button>
      </div>
      <div className="bg-gray-100 flex-1 mt-2 rounded-lg border border-dashed border-neutral-200 relative">
        {/* анимация */}

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(10px)',
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
              filter: 'blur(0px)',
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              duration: 0.3,
            }}
            className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200"
          >
            <div className="flex gap-2 p-4">
              <div
                className="
                h-7 w-7 
                flex-shrink-0 
                bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.4),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white 
                rounded-md 
                flex 
                items-center 
                justify-center
                "
              >
                <FontAwesomeIcon icon={faMessage} className="h-4 w-4 text-neutral-600" />
              </div>
              <div className="flex flex-col">
                <p className="text-[8px] font-bold text-neutral-600">UI Components</p>
                <p className="text-neutral-400 text-[8px] mt-1">
                  A collection of UI components
                </p>
              </div>
            </div>
            <div className="flex gap-2 p-4">
              <div
                className="
                h-7 w-7 
                flex-shrink-0 
                bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.4),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white 
                rounded-md 
                flex 
                items-center 
                justify-center
                "
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-neutral-600" />
              </div>
              <div className="flex flex-col">
                <p className="text-[8px] font-bold text-neutral-600">UI Components</p>
                <p className="text-neutral-400 text-[8px] mt-1">
                  A collection of UI components
                </p>
              </div>
            </div>
            <div className="flex gap-2 p-4">
              <div
                className="
                h-7 w-7 
                flex-shrink-0 
                bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.4),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white 
                rounded-md 
                flex 
                items-center 
                justify-center
                "
              >
                <FontAwesomeIcon icon={faComments} className="h-4 w-4 text-neutral-600" />
              </div>
              <div className="flex flex-col">
                <p className="text-[8px] font-bold text-neutral-600">UI Components</p>
                <p className="text-neutral-400 text-[8px] mt-1">
                  A collection of UI components
                </p>
              </div>
            </div>
            <div className="flex gap-2 p-4">
              <div
                className="
                h-7 w-7 
                flex-shrink-0 
                bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.4),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white 
                rounded-md 
                flex 
                items-center 
                justify-center
                "
              >
                <FontAwesomeIcon
                  icon={faCommentSms}
                  className="h-4 w-4 text-neutral-600"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[8px] font-bold text-neutral-600">UI Components</p>
                <p className="text-neutral-400 text-[8px] mt-1">
                  A collection of UI components
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* анимация */}
      </div>
    </div>
  );
};
