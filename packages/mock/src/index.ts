import { uniqueId as u } from 'lodash-es';
export { default as TWO_DEGREE_BANK_DATA } from './two-degree-bank.json';
export { default as TWO_DEGREE_BANK_DATA_20 } from './two-degree-bank-20.json';
export { default as THREE_DEGREE_BANK_DATA } from './three-degree-bank.json';

export const DEFAULT_DATA = {
  nodes: [
    { id: '1', name: '人工智能', cfg: { color: '#6EA3FD' } },
    { id: '2', name: '深度学习', cfg: { color: '#8470A8' } },
    { id: '3', name: 'TensorFlow', cfg: { color: '#64B3C0' } },
    { id: '4', name: '谷歌', cfg: { color: '#DF954E' } },
    { id: '5', name: '人工智能公司', cfg: { color: '#70A88F' } },
    { id: '6', name: '语义网', cfg: { color: '#ACBBDB' } },
    { id: '7', name: '知识图谱', cfg: { color: '#425B8A' } },
    { id: '8', name: '图灵', cfg: { color: '#ADCAF1' } },
    { id: '9', name: '数学家', cfg: { color: '#505C59' } },
    { id: '10', name: '图灵测试', cfg: { color: '#CBCCC0' } },
    { id: '11', name: '英国', cfg: { color: '#939F96' } },
    { id: '12', name: '大不列颠🇬🇧', cfg: { color: '#A47878' } }
  ],
  links: [
    { id: 'a', name: '实现方式', source: '2', target: '3' },
    { id: 'b', name: '提出', source: '4', target: '3' },
    { id: 'c', name: 'Isa', source: '4', target: '5' },
    { id: 'd', name: '提出', source: '4', target: '7' },
    { id: 'e', name: 'isFrom', source: '7', target: '6' },
    { id: 'f', name: 'subTopic', source: '1', target: '2' },
    { id: 'g', name: 'subTopic', source: '1', target: '7' },
    { id: 'h', name: '之父是', source: '1', target: '8' },
    { id: 'i', name: 'Isa', source: '8', target: '9' },
    { id: 'j', name: '提出', source: '8', target: '10' },
    { id: 'k', name: '国籍', source: '8', target: '11' },
    { id: 'l', name: '别名', source: '11', target: '12' },
    { id: 'm', name: '被提出', source: '10', target: '8' }
  ]
};

export const randomRadial = (id?: string) => {
  const _id = id || uniqueId('radial');
  const centerNode = { id: _id, name: _id, cfg: { color: randomHexColor() } };
  const nodes: any[] = [];
  for (let i = 1; i < 10; i++) {
    const _id = uniqueId('radial');
    nodes.push({ id: _id, name: _id, cfg: { color: randomHexColor() } });
  }
  const links: any[] = [];
  for (const node of nodes) {
    const _id = uniqueId('radial');
    links.push({ id: _id, name: _id, source: node.id, target: centerNode.id });
  }
  return { nodes: [...nodes, centerNode], links };
};

function uniqueId(prefix: string) {
  return `${u(prefix)}-${Math.random()}`;
}

function randomHexColor() {
  //随机生成十六进制颜色
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6);
}

/**
 * 一度关系银行数据
 */
export const ONE_DEGREE_BANK_DATA = {
  nodes: [
    { id: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11', name: '法堂乡网点', category: '网点', cfg: { color: '#64b3c0', radius: 30 } },
    { id: 'sidahang_v5_vertexes/570baff81d8689f32109523d02a574d2', name: '吕官乜', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/4bb34ebcf874de6ab99d056358131439', name: '锺冯南', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/13b633efdfbc3f83943d1bb6a9625f4d', name: '周计古', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/f57f3626bbe714b4b9e82a1a78326da3', name: '庄迟段', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/208f378d889fec50b513f95f5b488084', name: '吕伍顺', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/0547e818fca796ef8acf036f7dc25ff9', name: '胡莘巴', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/2e6c571cfe2a0f745a51069748a4919a', name: '夏诸濮', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/efa64855b4ca527ef9ad32a7db8a721a', name: '吕古后', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/d756f134945def9a0b4f887ca0b4f72d', name: '唐前祝', category: '员工', cfg: { color: '#70a88f', radius: 18 } },
    { id: 'sidahang_v5_vertexes/c5d2bb6f991b2e28e66fa1e593646859', name: '阮端郜', category: '员工', cfg: { color: '#70a88f', radius: 18 } }
  ],
  links: [
    {
      id: 'sidahang_v5_edges/c4a9b2e14b82b3db8bef0741f6068085',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/570baff81d8689f32109523d02a574d2',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/241f97a4d8d1fad196d2ff6ce6b0fd7d',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/4bb34ebcf874de6ab99d056358131439',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/94a4a2aa024e13b753c87e780326e321',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/13b633efdfbc3f83943d1bb6a9625f4d',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/e07b277bfeff5ee865eda880b97e1c11',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/f57f3626bbe714b4b9e82a1a78326da3',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/37137b53fdd918f3d7f7feafdc8af19d',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/208f378d889fec50b513f95f5b488084',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/2fc0e998c1b6474c4ef6de32e3ebc8bb',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/0547e818fca796ef8acf036f7dc25ff9',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/c7d0fc732ca6e8d92142650aec7474fd',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/2e6c571cfe2a0f745a51069748a4919a',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/800cecda6b3f8ee20d35b8133ebb68df',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/efa64855b4ca527ef9ad32a7db8a721a',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/5df9252d3c73d7c31fac01ce0f1997e6',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/d756f134945def9a0b4f887ca0b4f72d',
      name: '包含'
    },
    {
      id: 'sidahang_v5_edges/33b7e0011761b954881250ec086f53e0',
      source: 'sidahang_v5_vertexes/f6a8403e2218b355b4f4fc9b1b023f11',
      target: 'sidahang_v5_vertexes/c5d2bb6f991b2e28e66fa1e593646859',
      name: '包含'
    }
  ]
};
