// BlockFilter.js
import React from 'react';

function BlockFilter({ selectedBlock, setSelectedBlock }) {
  const blocks = ['', 'B4']; // Add more blocks if needed

  return (
    <select
      value={selectedBlock}
      onChange={(e) => setSelectedBlock(e.target.value)}
    >
      <option value="">All Blocks</option>
      {blocks.map((block) => (
        <option key={block} value={block}>
          {block || 'All Blocks'}
        </option>
      ))}
    </select>
  );
}

export default BlockFilter;
