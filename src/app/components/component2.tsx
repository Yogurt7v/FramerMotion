import { cn } from '../../lib/utils';
import { GaistSans } from '@/lib/fonts';
import { Card } from '../components/ui/card';

export const Component2 = () => {
  return (
    <div
      className={cn(
        GaistSans.className,
        'h-screen flex items-center justify-center bg-gray-50'
      )}
    >
      <Card />
    </div>
  );
};
