import React from 'react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrambleText } from '@/components/ui/ScrambleText';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] pt-28 flex items-center justify-center px-4">
      <div className="max-w-lg text-center rounded-3xl glass-panel-strong p-10 border border-orbit-green/40 space-y-5">
        <ScrambleText text="404 // NODE OUT OF ORBIT" />
        <h1 className="font-heading text-4xl font-extrabold text-foreground">
          Verification Signal Not Found
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          The page you are looking for may have moved or been consolidated into
          our new verification modules.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <MagneticButton href="/" variant="primary">
            Return to Homepage
          </MagneticButton>
          <MagneticButton href="/employee-bgv" variant="ghost">
            Explore Services
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
