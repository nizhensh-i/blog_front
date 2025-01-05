export default {
  fetchQuote() {
    const today = new Date().toISOString().split('T')[0]
    const quoteData = sentences.find((item) => item.date === today)

    if (quoteData) {
      return quoteData.quote
    } else {
      return ''
    }
  }
}

const sentences=[
    {
        "date": "2025-01-01",
        "quote": "独在异乡为异客，每逢佳节倍思亲。"
    },
    {
        "date": "2025-01-02",
        "quote": "春眠不觉晓，处处闻啼鸟。"
    },
    {
        "date": "2025-01-03",
        "quote": "夜来风雨声，花落知多少。"
    },
    {
        "date": "2025-01-04",
        "quote": "床前明月光，疑是地上霜。"
    },
    {
        "date": "2025-01-05",
        "quote": "举头望明月，低头思故乡。"
    },
    {
        "date": "2025-01-06",
        "quote": "但愿人长久，千里共婵娟。"
    },
    {
        "date": "2025-01-07",
        "quote": "青青园中葵，朝露待日晞。"
    },
    {
        "date": "2025-01-08",
        "quote": "阳春布德泽，万物生光辉。"
    },
    {
        "date": "2025-01-09",
        "quote": "常恐秋节至，焜黄华叶衰。"
    },
    {
        "date": "2025-01-10",
        "quote": "百川东到海，何时复西归。"
    },
    {
        "date": "2025-01-11",
        "quote": "少壮不努力，老大徒伤悲。"
    },
    {
        "date": "2025-01-12",
        "quote": "二人若偶然，万年共一失。"
    },
    {
        "date": "2025-01-13",
        "quote": "江流天地外，山色有无中。"
    },
    {
        "date": "2025-01-14",
        "quote": "山水碧于天，画船听雨眠。"
    },
    {
        "date": "2025-01-15",
        "quote": "水光潋滟晴方好，山色空蒙雨亦奇。"
    },
    {
        "date": "2025-01-16",
        "quote": "白露未晞，白露未已。"
    },
    {
        "date": "2025-01-17",
        "quote": "微雨闲花落，春鸟午飞鸣。"
    },
    {
        "date": "2025-01-18",
        "quote": "千山鸟飞绝，万径人踪灭。"
    },
    {
        "date": "2025-01-19",
        "quote": "孤舟蓑笠翁，独钓寒江雪。"
    },
    {
        "date": "2025-01-20",
        "quote": "日暮苍山远，天寒白屋贫。"
    },
    {
        "date": "2025-01-21",
        "quote": "汗滴禾下土，粒粒皆辛苦。"
    },
    {
        "date": "2025-01-22",
        "quote": "独在异乡为异客，每逢佳节倍思亲。"
    },
    {
        "date": "2025-01-23",
        "quote": "春眠不觉晓，处处闻啼鸟。"
    },
    {
        "date": "2025-01-24",
        "quote": "夜来风雨声，花落知多少。"
    },
    {
        "date": "2025-01-25",
        "quote": "床前明月光，疑是地上霜。"
    },
    {
        "date": "2025-01-26",
        "quote": "举头望明月，低头思故乡。"
    },
    {
        "date": "2025-01-27",
        "quote": "但愿人长久，千里共婵娟。"
    },
    {
        "date": "2025-01-28",
        "quote": "青青园中葵，朝露待日晞。"
    },
    {
        "date": "2025-01-29",
        "quote": "阳春布德泽，万物生光辉。"
    },
    {
        "date": "2025-01-30",
        "quote": "常恐秋节至，焜黄华叶衰。"
    },
    {
        "date": "2025-01-31",
        "quote": "百川东到海，何时复西归。"
    },
    {
        "date": "2025-02-01",
        "quote": "少壮不努力，老大徒伤悲。"
    },
    {
        "date": "2025-02-02",
        "quote": "二人若偶然，万年共一失。"
    },
    {
        "date": "2025-02-03",
        "quote": "江流天地外，山色有无中。"
    },
    {
        "date": "2025-02-04",
        "quote": "山水碧于天，画船听雨眠。"
    },
    {
        "date": "2025-02-05",
        "quote": "水光潋滟晴方好，山色空蒙雨亦奇。"
    },
    {
        "date": "2025-02-06",
        "quote": "白露未晞，白露未已。"
    },
    {
        "date": "2025-02-07",
        "quote": "微雨闲花落，春鸟午飞鸣。"
    },
    {
        "date": "2025-02-08",
        "quote": "千山鸟飞绝，万径人踪灭。"
    },
    {
        "date": "2025-02-09",
        "quote": "孤舟蓑笠翁，独钓寒江雪。"
    },
    {
        "date": "2025-02-10",
        "quote": "日暮苍山远，天寒白屋贫。"
    },
    {
        "date": "2025-02-11",
        "quote": "汗滴禾下土，粒粒皆辛苦。"
    },
    {
        "date": "2025-02-12",
        "quote": "燕草如碧丝，秦桑低绿枝。"
    },
    {
        "date": "2025-02-13",
        "quote": "当君怀归日，是妾断肠时。"
    },
    {
        "date": "2025-02-14",
        "quote": "春风不相识，何事入罗帏。"
    },
    {
        "date": "2025-02-15",
        "quote": "月明星稀，乌鹊南飞。"
    },
    {
        "date": "2025-02-16",
        "quote": "此情可待成追忆，只是当时已惘然。"
    },
    {
        "date": "2025-02-17",
        "quote": "问世间，情是何物，直教生死相许？"
    },
    {
        "date": "2025-02-18",
        "quote": "天凉好个秋。"
    },
    {
        "date": "2025-02-19",
        "quote": "山有木兮木有枝，心悦君兮君不知。"
    },
    {
        "date": "2025-02-20",
        "quote": "君问归期未有期，巴山夜雨涨秋池。"
    },
    {
        "date": "2025-02-21",
        "quote": "红烛微摇曳，思君不见君。"
    },
    {
        "date": "2025-02-22",
        "quote": "青青子衿，悠悠我心。"
    },
    {
        "date": "2025-02-23",
        "quote": "但愿君心似我心，定不负相思意。"
    },
    {
        "date": "2025-02-24",
        "quote": "众里寻他千百度，蓦然回首，那人却在灯火阑珊处。"
    },
    {
        "date": "2025-02-25",
        "quote": "山重水复疑无路，柳暗花明又一村。"
    },
    {
        "date": "2025-02-26",
        "quote": "莫道不销魂，帘卷西风，人比黄花瘦。"
    },
    {
        "date": "2025-02-27",
        "quote": "此去经年，应是良辰好景虚设。"
    },
    {
        "date": "2025-02-28",
        "quote": "莫等闲，白了少年头，空悲切。"
    },
    {
        "date": "2025-03-01",
        "quote": "但愿人长久，千里共婵娟。"
    },
    {
        "date": "2025-03-02",
        "quote": "此情可待成追忆，只是当时已惘然。"
    },
    {
        "date": "2025-03-03",
        "quote": "山有木兮木有枝，心悦君兮君不知。"
    },
    {
        "date": "2025-03-04",
        "quote": "人生自是有情痴，此恨不关风与月。"
    },
    {
        "date": "2025-03-05",
        "quote": "此去经年，应是良辰好景虚设。"
    },
    {
        "date": "2025-03-06",
        "quote": "壮志饥餐胡虏肉，笑谈渴饮匈奴血。"
    },
    {
        "date": "2025-03-07",
        "quote": "多情自古伤离别，更那堪、冷落清秋节。"
    },
    {
        "date": "2025-03-08",
        "quote": "今宵酒醒何处？杨柳岸、晓风残月。"
    },
    {
        "date": "2025-03-09",
        "quote": "两情若是久长时，又岂在朝朝暮暮。"
    },
    {
        "date": "2025-03-10",
        "quote": "十年生死两茫茫，不思量，自难忘。"
    },
    {
        "date": "2025-03-11",
        "quote": "但愿人长久，千里共婵娟。"
    },
    {
        "date": "2025-03-12",
        "quote": "世间无限丹青手，一片伤心画不成。"
    },
    {
        "date": "2025-03-13",
        "quote": "白日依山尽，黄河入海流。"
    },
    {
        "date": "2025-03-14",
        "quote": "欲穷千里目，更上一层楼。"
    },
    {
        "date": "2025-03-15",
        "quote": "海上生明月，天涯共此时。"
    },
    {
        "date": "2025-03-16",
        "quote": "情人怨遥夜，竟夕起相思。"
    },
    {
        "date": "2025-03-17",
        "quote": "灭烛怜光满，披衣觉露滋。"
    },
    {
        "date": "2025-03-18",
        "quote": "不堪盈手赠，还寝梦佳期。"
    },
    {
        "date": "2025-03-19",
        "quote": "蓬莱文章建安骨，中间小谢又清发。"
    },
    {
        "date": "2025-03-20",
        "quote": "青青子衿，悠悠我心。"
    },
    {
        "date": "2025-03-21",
        "quote": "但愿君心似我心，定不负相思意。"
    },
    {
        "date": "2025-03-22",
        "quote": "众里寻他千百度，蓦然回首，那人却在灯火阑珊处。"
    },
    {
        "date": "2025-03-23",
        "quote": "山重水复疑无路，柳暗花明又一村。"
    },
    {
        "date": "2025-03-24",
        "quote": "莫道不销魂，帘卷西风，人比黄花瘦。"
    },
    {
        "date": "2025-03-25",
        "quote": "此去经年，应是良辰好景虚设。"
    },
    {
        "date": "2025-03-26",
        "quote": "莫等闲，白了少年头，空悲切。"
    },
    {
        "date": "2025-03-27",
        "quote": "但愿人长久，千里共婵娟。"
    },
    {
        "date": "2025-03-28",
        "quote": "此情可待成追忆，只是当时已惘然。"
    },
    {
        "date": "2025-03-29",
        "quote": "山有木兮木有枝，心悦君兮君不知。"
    },
    {
        "date": "2025-03-30",
        "quote": "人生自是有情痴，此恨不关风与月。"
    },
    {
        "date": "2025-03-31",
        "quote": "此去经年，应是良辰好景虚设。"
    },
    {
        "date": "2025-04-01",
        "quote": "壮志饥餐胡虏肉，笑谈渴饮匈奴血。"
    },
    {
        "date": "2025-04-02",
        "quote": "多情自古伤离别，更那堪、冷落清秋节。"
    },
    {
        "date": "2025-04-03",
        "quote": "今宵酒醒何处？杨柳岸、晓风残月。"
    },
    {
        "date": "2025-04-04",
        "quote": "两情若是久长时，又岂在朝朝暮暮。"
    },
    {
        "date": "2025-04-05",
        "quote": "十年生死两茫茫，不思量，自难忘。"
    },
    {
        "date": "2025-04-06",
        "quote": "月落乌啼霜满天，江枫渔火对愁眠。"
    },
    {
        "date": "2025-04-07",
        "quote": "姑苏城外寒山寺，夜半钟声到客船。"
    },
    {
        "date": "2025-04-08",
        "quote": "枫桥夜泊，月落乌啼霜满天。"
    },
    {
        "date": "2025-04-09",
        "quote": "独在异乡为异客，每逢佳节倍思亲。"
    },
    {
        "date": "2025-04-10",
        "quote": "青青园中葵，朝露待日晞。"
    },
    {
        "date": "2025-04-11",
        "quote": "阳春布德泽，万物生光辉。"
    },
    {
        "date": "2025-04-12",
        "quote": "常恐秋节至，焜黄华叶衰。"
    },
    {
        "date": "2025-04-13",
        "quote": "百川东到海，何时复西归。"
    },
    {
        "date": "2025-04-14",
        "quote": "少壮不努力，老大徒伤悲。"
    },
    {
        "date": "2025-04-15",
        "quote": "二人若偶然，万年共一失。"
    },
    {
        "date": "2025-04-16",
        "quote": "江流天地外，山色有无中。"
    },
    {
        "date": "2025-04-17",
        "quote": "山水碧于天，画船听雨眠。"
    },
    {
        "date": "2025-04-18",
        "quote": "水光潋滟晴方好，山色空蒙雨亦奇。"
    },
    {
        "date": "2025-04-19",
        "quote": "白露未晞，白露未已。"
    },
    {
        "date": "2025-04-20",
        "quote": "微雨闲花落，春鸟午飞鸣。"
    },
    {
        "date": "2025-04-21",
        "quote": "千山鸟飞绝，万径人踪灭。"
    },
    {
        "date": "2025-04-22",
        "quote": "孤舟蓑笠翁，独钓寒江雪。"
    },
    {
        "date": "2025-04-23",
        "quote": "日暮苍山远，天寒白屋贫。"
    },
    {
        "date": "2025-04-24",
        "quote": "汗滴禾下土，粒粒皆辛苦。"
    },
    {
        "date": "2025-04-25",
        "quote": "春水碧于天，画船听雨眠。"
    },
    {
        "date": "2025-04-26",
        "quote": "垆边人似月，皓腕凝霜雪。"
    },
    {
        "date": "2025-04-27",
        "quote": "无边落木萧萧下，不尽长江滚滚来。"
    },
    {
        "date": "2025-04-28",
        "quote": "万里悲秋常作客，百年多病独登台。"
    },
    {
        "date": "2025-04-29",
        "quote": "远上寒山石径斜，白云深处有人家。"
    },
    {
        "date": "2025-04-30",
        "quote": "停车坐爱枫林晚，霜叶红于二月花。"
    },
    {
        "date": "2025-05-01",
        "quote": "月落乌啼霜满天，江枫渔火对愁眠。"
    },
    {
        "date": "2025-05-02",
        "quote": "姑苏城外寒山寺，夜半钟声到客船。"
    },
    {
        "date": "2025-05-03",
        "quote": "醉里挑灯看剑，梦回吹角连营。"
    },
    {
        "date": "2025-05-04",
        "quote": "衡阳雁去无留意， Luis穿林打叶声。"
    },
    {
        "date": "2025-05-05",
        "quote": "山回路转不见君，雪上空留马行处。"
    },
    {
        "date": "2025-05-06",
        "quote": "月下飞天镜，云生结海楼。"
    },
    {
        "date": "2025-05-07",
        "quote": "白兔捣药秋复春，嫦娥孤栖与谁邻？"
    },
    {
        "date": "2025-05-08",
        "quote": "今人不见古时月，今月曾经照古人。"
    },
    {
        "date": "2025-05-09",
        "quote": "人攀明月不可得，月行却与人相随。"
    },
    {
        "date": "2025-05-10",
        "quote": "皎如飞镜临丹阙，绿烟灭尽清辉发。"
    },
    {
        "date": "2025-05-11",
        "quote": "但见宵从海上来，宁知晓向云间没？"
    },
    {
        "date": "2025-05-12",
        "quote": "白上衣，白下裙，白鞋子，白袜子。"
    },
    {
        "date": "2025-05-13",
        "quote": "白发老翁 Safely in the sun."
    },
    {
        "date": "2025-05-14",
        "quote": "白猫黑猫，黑白相间。"
    },
    {
        "date": "2025-05-15",
        "quote": "白天的阳光，黑夜的星光。"
    },
    {
        "date": "2025-05-16",
        "quote": "白云飘，蓝天映。"
    },
    {
        "date": "2025-05-17",
        "quote": "白浪涛涛，黑石矗矗。"
    },
    {
        "date": "2025-05-18",
        "quote": "白露初秋，天气渐凉。"
    },
    {
        "date": "2025-05-19",
        "quote": "白云深处有人家，停车坐爱枫林晚。"
    },
    {
        "date": "2025-05-20",
        "quote": "白日依山尽，黄河入海流。"
    },
    {
        "date": "2025-05-21",
        "quote": "白头翁，黑头雏，相看两不厌。"
    },
    {
        "date": "2025-05-22",
        "quote": "白鹤晾翅，黑熊跳舞。"
    },
    {
        "date": "2025-05-23",
        "quote": "白杨树，黑土路，风吹叶子响。"
    },
    {
        "date": "2025-05-24",
        "quote": "白花含笑，黑蜂忙碌。"
    },
    {
        "date": "2025-05-25",
        "quote": "白皮松，黑松鸡，自然和谐图。"
    },
    {
        "date": "2025-05-26",
        "quote": "白天的云，夜晚的星，不变的思念。"
    },
    {
        "date": "2025-05-27",
        "quote": "白云飘渺，山峰隐现。"
    },
    {
        "date": "2025-05-28",
        "quote": "白天的阳光，夜晚的月色，映照千年古韵。"
    },
    {
        "date": "2025-05-29",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-05-30",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-05-31",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-06-01",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-06-02",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-06-03",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-06-04",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-06-05",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-06-06",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-06-07",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-06-08",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-06-09",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-06-10",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-06-11",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-06-12",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-06-13",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-06-14",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-06-15",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-06-16",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-06-17",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-06-18",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-06-19",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-06-20",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-06-21",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-06-22",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-06-23",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-06-24",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-06-25",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-06-26",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-06-27",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-06-28",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-06-29",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-06-30",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-07-01",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-07-02",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-07-03",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-07-04",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-07-05",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-07-06",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-07-07",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-07-08",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-07-09",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-07-10",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-07-11",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-07-12",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-07-13",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-07-14",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-07-15",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-07-16",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-07-17",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-07-18",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-07-19",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-07-20",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-07-21",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-07-22",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-07-23",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-07-24",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-07-25",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-07-26",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-07-27",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-07-28",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-07-29",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-07-30",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-07-31",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-08-01",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-08-02",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-08-03",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-08-04",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-08-05",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-08-06",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-08-07",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-08-08",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-08-09",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-08-10",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-08-11",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-08-12",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-08-13",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-08-14",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-08-15",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-08-16",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-08-17",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-08-18",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-08-19",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-08-20",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-08-21",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-08-22",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-08-23",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-08-24",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-08-25",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-08-26",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-08-27",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-08-28",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-08-29",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-08-30",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-08-31",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-09-01",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-09-02",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-09-03",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-09-04",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-09-05",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-09-06",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-09-07",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-09-08",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-09-09",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-09-10",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-09-11",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-09-12",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-09-13",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-09-14",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-09-15",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-09-16",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-09-17",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-09-18",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-09-19",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-09-20",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-09-21",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-09-22",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-09-23",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-09-24",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-09-25",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-09-26",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-09-27",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-09-28",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-09-29",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-09-30",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-10-01",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-10-02",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-10-03",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-10-04",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-10-05",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-10-06",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-10-07",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-10-08",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-10-09",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-10-10",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-10-11",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-10-12",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-10-13",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-10-14",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-10-15",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-10-16",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-10-17",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-10-18",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-10-19",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-10-20",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-10-21",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-10-22",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-10-23",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-10-24",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-10-25",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-10-26",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-10-27",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-10-28",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-10-29",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-10-30",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-10-31",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-11-01",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-11-02",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-11-03",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-11-04",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-11-05",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-11-06",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-11-07",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-11-08",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-11-09",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-11-10",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-11-11",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-11-12",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-11-13",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-11-14",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-11-15",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-11-16",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-11-17",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-11-18",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-11-19",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-11-20",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-11-21",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-11-22",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-11-23",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-11-24",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-11-25",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-11-26",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-11-27",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-11-28",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-11-29",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-11-30",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-12-01",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-12-02",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-12-03",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-12-04",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-12-05",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-12-06",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-12-07",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-12-08",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-12-09",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-12-10",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-12-11",
        "quote": "白之死，青松之生，自然更替。"
    },
    {
        "date": "2025-12-12",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-12-13",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-12-14",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-12-15",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-12-16",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-12-17",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-12-18",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-12-19",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-12-20",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-12-21",
        "quote": "白日照耀，黑夜沉思。"
    },
    {
        "date": "2025-12-22",
        "quote": "白云在天，野径无人。"
    },
    {
        "date": "2025-12-23",
        "quote": "白杨萧萧，黄河洋洋。"
    },
    {
        "date": "2025-12-24",
        "quote": "白露沾衣，秋意渐浓。"
    },
    {
        "date": "2025-12-25",
        "quote": "白日放歌须纵酒，青春作伴好还乡。"
    },
    {
        "date": "2025-12-26",
        "quote": "白云苍狗，世事如梦。"
    },
    {
        "date": "2025-12-27",
        "quote": "白首相庄前，青青园中葵。"
    },
    {
        "date": "2025-12-28",
        "quote": "白毛浮绿水，红掌拨清波。"
    },
    {
        "date": "2025-12-29",
        "quote": "白鸟之死，青松之生，自然更替。"
    },
    {
        "date": "2025-12-30",
        "quote": "白日照耀，黑夜沉思。"
    }
]
