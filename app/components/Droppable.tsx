'use client'
import {useDroppable} from '@dnd-kit/core';

export function Droppable({id, children}) {
  const {ref} = useDroppable({id});

  return (
    <div ref={ref} style={{width: 300, height: 300}}>
      {children}
    </div>
  );
}