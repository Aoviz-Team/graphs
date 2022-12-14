export default {
  nodes: [
    { id: '1', name: '人工智能', cfg: { backgroundColor: '#6EA3FD' } },
    { id: '2', name: '深度学习', cfg: { backgroundColor: '#8470A8' } },
    { id: '3', name: 'TensorFlow', cfg: { backgroundColor: '#64B3C0' } },
    { id: '4', name: '谷歌', cfg: { backgroundColor: '#DF954E' } },
    { id: '5', name: '人工智能公司', cfg: { backgroundColor: '#70A88F' } },
    { id: '6', name: '语义网', cfg: { backgroundColor: '#ACBBDB' } },
    { id: '7', name: '知识图谱', cfg: { backgroundColor: '#425B8A' } },
    { id: '8', name: '图灵', cfg: { backgroundColor: '#ADCAF1' } },
    { id: '9', name: '数学家', cfg: { backgroundColor: '#505C59' } },
    { id: '10', name: '图灵测试', cfg: { backgroundColor: '#CBCCC0' } },
    { id: '11', name: '英国', cfg: { backgroundColor: '#939F96' } },
    { id: '12', name: '大不列颠🇬🇧', cfg: { backgroundColor: '#A47878' } }
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
}
