'use client';

import { FCWithChildren } from '@/types';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { useMemo } from 'react';

const AntdRegistry: FCWithChildren = ({ children }: { children: React.ReactNode }) => {
  const cache = useMemo(() => createCache(), []);
  useServerInsertedHTML(() => <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />);
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdRegistry;
