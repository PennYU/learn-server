'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const words = [
      {
        "english": "a",
        "chinese": "⼀个"
      },
      {
        "english": "an",
        "chinese": "⼀个"
      },
      {
        "english": "about",
        "chinese": "关于"
      },
      {
        "english": "afraid",
        "chinese": "害怕"
      },
      {
        "english": "after",
        "chinese": "后"
      },
      {
        "english": "afternoon",
        "chinese": "下午"
      },
      {
        "english": "again",
        "chinese": "再次"
      },
      {
        "english": "all",
        "chinese": "全部"
      },
      {
        "english": "also",
        "chinese": "还"
      },
      {
        "english": "always",
        "chinese": "总是"
      },
      {
        "english": "am",
        "chinese": "是"
      },
      {
        "english": "and",
        "chinese": "和"
      },
      {
        "english": "angry",
        "chinese": "⽣⽓的"
      },
      {
        "english": "animal",
        "chinese": "动物"
      },
      {
        "english": "answer",
        "chinese": "回答"
      },
      {
        "english": "any",
        "chinese": "任何"
      },
      {
        "english": "apple",
        "chinese": "苹果"
      },
      {
        "english": "are",
        "chinese": "是"
      },
      {
        "english": "arm",
        "chinese": "⼿臂"
      },
      {
        "english": "art",
        "chinese": "艺术"
      },
      {
        "english": "ask",
        "chinese": "问"
      },
      {
        "english": "at",
        "chinese": "在"
      },
      {
        "english": "aunt",
        "chinese": "姨"
      },
      {
        "english": "autumn",
        "chinese": "秋天"
      },
      {
        "english": "baby",
        "chinese": "婴⼉"
      },
      {
        "english": "back",
        "chinese": "背部"
      },
      {
        "english": "bad",
        "chinese": "坏的"
      },
      {
        "english": "bag",
        "chinese": "包"
      },
      {
        "english": "ball",
        "chinese": "球"
      },
      {
        "english": "banana",
        "chinese": "⾹蕉"
      },
      {
        "english": "basketball",
        "chinese": "篮球"
      },
      {
        "english": "be",
        "chinese": "是"
      },
      {
        "english": "bear",
        "chinese": "熊"
      },
      {
        "english": "beautiful",
        "chinese": "美丽的"
      },
      {
        "english": "bed",
        "chinese": "床"
      },
      {
        "english": "before",
        "chinese": "前"
      },
      {
        "english": "begin",
        "chinese": "开始"
      },
      {
        "english": "behind",
        "chinese": "在后⾯"
      },
      {
        "english": "beside",
        "chinese": "旁"
      },
      {
        "english": "between",
        "chinese": "之间"
      },
      {
        "english": "big",
        "chinese": "⼤的"
      },
      {
        "english": "bike",
        "chinese": "⾃⾏⻋"
      },
      {
        "english": "bicycle",
        "chinese": "⾃⾏⻋"
      },
      {
        "english": "bird",
        "chinese": "⻦"
      },
      {
        "english": "birthday",
        "chinese": "⽣⽇"
      },
      {
        "english": "black",
        "chinese": "⿊⾊的"
      },
      {
        "english": "blackboard",
        "chinese": "⿊板"
      },
      {
        "english": "blue",
        "chinese": "蓝⾊的"
      },
      {
        "english": "boat",
        "chinese": "船"
      },
      {
        "english": "body",
        "chinese": "身体"
      },
      {
        "english": "book",
        "chinese": "书"
      },
      {
        "english": "box",
        "chinese": "盒⼦"
      },
      {
        "english": "boy",
        "chinese": "男⽣"
      },
      {
        "english": "bread",
        "chinese": "⾯包"
      },
      {
        "english": "breakfast",
        "chinese": "早餐"
      },
      {
        "english": "bring",
        "chinese": "带来"
      },
      {
        "english": "brother",
        "chinese": "兄弟"
      },
      {
        "english": "brown",
        "chinese": "棕⾊的"
      },
      {
        "english": "bus",
        "chinese": "公共汽⻋"
      },
      {
        "english": "busy",
        "chinese": "忙碌的"
      },
      {
        "english": "but",
        "chinese": "但"
      },
      {
        "english": "buy",
        "chinese": "买"
      },
      {
        "english": "by",
        "chinese": "经过"
      },
      {
        "english": "cake",
        "chinese": "蛋糕"
      },
      {
        "english": "call",
        "chinese": "称呼"
      },
      {
        "english": "can",
        "chinese": "能够"
      },
      {
        "english": "candy",
        "chinese": "糖果"
      },
      {
        "english": "cap",
        "chinese": "帽"
      },
      {
        "english": "car",
        "chinese": "⻋"
      },
      {
        "english": "card",
        "chinese": "卡⽚"
      },
      {
        "english": "cat",
        "chinese": "猫"
      },
      {
        "english": "chair",
        "chinese": "椅⼦"
      },
      {
        "english": "chicken",
        "chinese": "鸡"
      },
      {
        "english": "child",
        "chinese": "孩⼦"
      },
      {
        "english": "children",
        "chinese": "孩⼦们"
      },
      {
        "english": "China",
        "chinese": "中国"
      },
      {
        "english": "Chinese",
        "chinese": "中国⼈"
      },
      {
        "english": "cinema",
        "chinese": "电影"
      },
      {
        "english": "city",
        "chinese": "城市"
      },
      {
        "english": "class",
        "chinese": "班级"
      },
      {
        "english": "clean",
        "chinese": "⼲净的"
      },
      {
        "english": "clever",
        "chinese": "聪明的"
      },
      {
        "english": "clock",
        "chinese": "钟"
      },
      {
        "english": "close",
        "chinese": "关"
      },
      {
        "english": "clothes",
        "chinese": "⾐服"
      },
      {
        "english": "cloudy",
        "chinese": "多云的"
      },
      {
        "english": "coat",
        "chinese": "外套"
      },
      {
        "english": "cold",
        "chinese": "寒冷的"
      },
      {
        "english": "colour",
        "chinese": "颜⾊"
      },
      {
        "english": "color",
        "chinese": "颜⾊"
      },
      {
        "english": "come",
        "chinese": "来"
      },
      {
        "english": "computer",
        "chinese": "计算机"
      },
      {
        "english": "cook",
        "chinese": "厨师"
      },
      {
        "english": "cool",
        "chinese": "凉爽的"
      },
      {
        "english": "cousin",
        "chinese": "表哥"
      },
      {
        "english": "cow",
        "chinese": "奶⽜"
      },
      {
        "english": "crayon",
        "chinese": "蜡笔"
      },
      {
        "english": "cry",
        "chinese": "哭"
      },
      {
        "english": "dad",
        "chinese": "爸爸"
      },
      {
        "english": "dance",
        "chinese": "舞蹈"
      },
      {
        "english": "day",
        "chinese": "天"
      },
      {
        "english": "dear",
        "chinese": "亲"
      },
      {
        "english": "desk",
        "chinese": "桌⼦"
      },
      {
        "english": "difficult",
        "chinese": "难的"
      },
      {
        "english": "dinner",
        "chinese": "晚餐"
      },
      {
        "english": "dirty",
        "chinese": "肮脏的"
      },
      {
        "english": "do",
        "chinese": "做"
      },
      {
        "english": "doctor",
        "chinese": "医⽣"
      },
      {
        "english": "dog",
        "chinese": "狗"
      },
      {
        "english": "door",
        "chinese": "⻔"
      },
      {
        "english": "down",
        "chinese": "下"
      },
      {
        "english": "draw",
        "chinese": "画"
      },
      {
        "english": "dress",
        "chinese": "裙⼦"
      },
      {
        "english": "drink",
        "chinese": "喝"
      },
      {
        "english": "driver",
        "chinese": "司机"
      },
      {
        "english": "duck",
        "chinese": "鸭"
      },
      {
        "english": "ear",
        "chinese": "⽿朵"
      },
      {
        "english": "early",
        "chinese": "早期的"
      },
      {
        "english": "easy",
        "chinese": "简单的"
      },
      {
        "english": "eat",
        "chinese": "吃"
      },
      {
        "english": "egg",
        "chinese": "蛋"
      },
      {
        "english": "elephant",
        "chinese": "⼤象"
      },
      {
        "english": "email",
        "chinese": "电⼦邮件"
      },
      {
        "english": "English",
        "chinese": "英语"
      },
      {
        "english": "evening",
        "chinese": "晚上"
      },
      {
        "english": "every",
        "chinese": "每⼀个"
      },
      {
        "english": "exercise",
        "chinese": "锻炼"
      },
      {
        "english": "eye",
        "chinese": "眼睛"
      },
      {
        "english": "face",
        "chinese": "脸"
      },
      {
        "english": "family",
        "chinese": "家庭"
      },
      {
        "english": "fan",
        "chinese": "扇⼦"
      },
      {
        "english": "far",
        "chinese": "远的"
      },
      {
        "english": "farm",
        "chinese": "农场"
      },
      {
        "english": "farmer",
        "chinese": "农⺠"
      },
      {
        "english": "fast",
        "chinese": "快速地"
      },
      {
        "english": "father",
        "chinese": "⽗亲"
      },
      {
        "english": "favourite",
        "chinese": "最喜欢的"
      },
      {
        "english": "favorite",
        "chinese": "最喜欢的"
      },
      {
        "english": "feel",
        "chinese": "感觉"
      },
      {
        "english": "film",
        "chinese": "电影"
      },
      {
        "english": "find",
        "chinese": "寻找"
      },
      {
        "english": "fine",
        "chinese": "美好的"
      },
      {
        "english": "fish",
        "chinese": "⻥"
      },
      {
        "english": "floor",
        "chinese": "地⾯"
      },
      {
        "english": "flower",
        "chinese": "花"
      },
      {
        "english": "fly",
        "chinese": "⻜"
      },
      {
        "english": "food",
        "chinese": "⻝物"
      },
      {
        "english": "foot",
        "chinese": "脚"
      },
      {
        "english": "feet",
        "chinese": "脚"
      },
      {
        "english": "football",
        "chinese": "⾜球"
      },
      {
        "english": "for",
        "chinese": "为了"
      },
      {
        "english": "friend",
        "chinese": "朋友"
      },
      {
        "english": "from",
        "chinese": "从"
      },
      {
        "english": "fruit",
        "chinese": "⽔果"
      },
      {
        "english": "game",
        "chinese": "游戏"
      },
      {
        "english": "get",
        "chinese": "得到"
      },
      {
        "english": "girl",
        "chinese": "⼥孩"
      },
      {
        "english": "give",
        "chinese": "给"
      },
      {
        "english": "go",
        "chinese": "去"
      },
      {
        "english": "good",
        "chinese": "好的"
      },
      {
        "english": "goodbye",
        "chinese": "再⻅"
      },
      {
        "english": "bye",
        "chinese": "再⻅"
      },
      {
        "english": "grandfather",
        "chinese": "祖⽗"
      },
      {
        "english": "grandpa",
        "chinese": "爷爷"
      },
      {
        "english": "grandmother",
        "chinese": "祖⺟"
      },
      {
        "english": "grandma",
        "chinese": "奶奶"
      },
      {
        "english": "grass",
        "chinese": "草"
      },
      {
        "english": "great",
        "chinese": "伟⼤的"
      },
      {
        "english": "green",
        "chinese": "绿⾊"
      },
      {
        "english": "hair",
        "chinese": "头发"
      },
      {
        "english": "half",
        "chinese": "⼀半"
      },
      {
        "english": "hand",
        "chinese": "⼿"
      },
      {
        "english": "happy",
        "chinese": "快乐的"
      },
      {
        "english": "have",
        "chinese": "有"
      },
      {
        "english": "has",
        "chinese": "有"
      },
      {
        "english": "he",
        "chinese": "他"
      },
      {
        "english": "head",
        "chinese": "头"
      },
      {
        "english": "healthy",
        "chinese": "健康"
      },
      {
        "english": "hear",
        "chinese": "听到"
      },
      {
        "english": "heavy",
        "chinese": "重的"
      },
      {
        "english": "hello",
        "chinese": "你好"
      },
      {
        "english": "help",
        "chinese": "帮助"
      },
      {
        "english": "her",
        "chinese": "她"
      },
      {
        "english": "here",
        "chinese": "这⾥"
      },
      {
        "english": "hi",
        "chinese": "你好"
      },
      {
        "english": "high",
        "chinese": "⾼的"
      },
      {
        "english": "him",
        "chinese": "他"
      },
      {
        "english": "his",
        "chinese": "他的"
      },
      {
        "english": "holiday",
        "chinese": "假期"
      },
      {
        "english": "home",
        "chinese": "家"
      },
      {
        "english": "horse",
        "chinese": "⻢"
      },
      {
        "english": "hospital",
        "chinese": "医院"
      },
      {
        "english": "hot",
        "chinese": "热的"
      },
      {
        "english": "hour",
        "chinese": "⼩时"
      },
      {
        "english": "house",
        "chinese": "屋"
      },
      {
        "english": "how",
        "chinese": "如何"
      },
      {
        "english": "hungry",
        "chinese": "饥饿的"
      },
      {
        "english": "I",
        "chinese": "我"
      },
      {
        "english": "ice cream",
        "chinese": "冰淇淋"
      },
      {
        "english": "idea",
        "chinese": "主意"
      },
      {
        "english": "ill",
        "chinese": "患病的"
      },
      {
        "english": "in",
        "chinese": "在"
      },
      {
        "english": "interesting",
        "chinese": "有趣的"
      },
      {
        "english": "is",
        "chinese": "是"
      },
      {
        "english": "it",
        "chinese": "它"
      },
      {
        "english": "its",
        "chinese": "它的"
      },
      {
        "english": "juice",
        "chinese": "果汁"
      },
      {
        "english": "jump",
        "chinese": "跳"
      },
      {
        "english": "kid",
        "chinese": "孩⼦"
      },
      {
        "english": "kind",
        "chinese": "种类"
      },
      {
        "english": "kitchen",
        "chinese": "厨房"
      },
      {
        "english": "kite",
        "chinese": "⻛筝"
      },
      {
        "english": "know",
        "chinese": "知道"
      },
      {
        "english": "lake",
        "chinese": "湖"
      },
      {
        "english": "late",
        "chinese": "晚的"
      },
      {
        "english": "left",
        "chinese": "剩下"
      },
      {
        "english": "leg",
        "chinese": "腿"
      },
      {
        "english": "lesson",
        "chinese": "课"
      },
      {
        "english": "let",
        "chinese": "让"
      },
      {
        "english": "library",
        "chinese": "图书馆"
      },
      {
        "english": "light",
        "chinese": "光"
      },
      {
        "english": "like",
        "chinese": "喜欢"
      },
      {
        "english": "listen",
        "chinese": "听"
      },
      {
        "english": "little",
        "chinese": "⼩的"
      },
      {
        "english": "live",
        "chinese": "居住"
      },
      {
        "english": "long",
        "chinese": "⻓"
      },
      {
        "english": "look",
        "chinese": "看"
      },
      {
        "english": "love",
        "chinese": "爱"
      },
      {
        "english": "lunch",
        "chinese": "午餐"
      },
      {
        "english": "make",
        "chinese": "制作"
      },
      {
        "english": "man",
        "chinese": "男⼈"
      },
      {
        "english": "men",
        "chinese": "男⼈"
      },
      {
        "english": "many",
        "chinese": "许多"
      },
      {
        "english": "map",
        "chinese": "地图"
      },
      {
        "english": "maths",
        "chinese": "数学"
      },
      {
        "english": "math",
        "chinese": "数学"
      },
      {
        "english": "me",
        "chinese": "我"
      },
      {
        "english": "meet",
        "chinese": "遇⻅"
      },
      {
        "english": "milk",
        "chinese": "⽜奶"
      },
      {
        "english": "minute",
        "chinese": "分钟"
      },
      {
        "english": "Miss",
        "chinese": "错过"
      },
      {
        "english": "monkey",
        "chinese": "猴"
      },
      {
        "english": "month",
        "chinese": "⽉"
      },
      {
        "english": "moon",
        "chinese": "⽉亮"
      },
      {
        "english": "morning",
        "chinese": "早晨"
      },
      {
        "english": "mother",
        "chinese": "⺟亲"
      },
      {
        "english": "mouth",
        "chinese": "嘴"
      },
      {
        "english": "Mr",
        "chinese": "先⽣"
      },
      {
        "english": "Mrs",
        "chinese": "太太"
      },
      {
        "english": "Ms",
        "chinese": "⼩姐"
      },
      {
        "english": "much",
        "chinese": "很多"
      },
      {
        "english": "mum",
        "chinese": "妈妈"
      },
      {
        "english": "mom",
        "chinese": "妈妈"
      },
      {
        "english": "music",
        "chinese": "⾳乐"
      },
      {
        "english": "my",
        "chinese": "我的"
      },
      {
        "english": "name",
        "chinese": "姓名"
      },
      {
        "english": "near",
        "chinese": "靠近"
      },
      {
        "english": "new",
        "chinese": "新的"
      },
      {
        "english": "next",
        "chinese": "下⼀个"
      },
      {
        "english": "nice",
        "chinese": "好的"
      },
      {
        "english": "night",
        "chinese": "夜晚"
      },
      {
        "english": "no",
        "chinese": "不"
      },
      {
        "english": "noodle",
        "chinese": "⾯条"
      },
      {
        "english": "nose",
        "chinese": "⿐⼦"
      },
      {
        "english": "not",
        "chinese": "不是"
      },
      {
        "english": "now",
        "chinese": "现在"
      },
      {
        "english": "nurse",
        "chinese": "护⼠"
      },
      {
        "english": "of",
        "chinese": "的"
      },
      {
        "english": "often",
        "chinese": "经常"
      },
      {
        "english": "old",
        "chinese": "⽼的"
      },
      {
        "english": "on",
        "chinese": "上"
      },
      {
        "english": "open",
        "chinese": "打开"
      },
      {
        "english": "or",
        "chinese": "或者"
      },
      {
        "english": "orange",
        "chinese": "橙"
      },
      {
        "english": "our",
        "chinese": "我们的"
      },
      {
        "english": "panda",
        "chinese": "熊猫"
      },
      {
        "english": "parent",
        "chinese": "⽗⺟"
      },
      {
        "english": "park",
        "chinese": "公园"
      },
      {
        "english": "party",
        "chinese": "派对"
      },
      {
        "english": "PE",
        "chinese": "体育"
      },
      {
        "english": "physical education",
        "chinese": "体育"
      },
      {
        "english": "pen",
        "chinese": "笔"
      },
      {
        "english": "pencil",
        "chinese": "铅笔"
      },
      {
        "english": "people",
        "chinese": "⼈们"
      },
      {
        "english": "photo",
        "chinese": "照⽚"
      },
      {
        "english": "picture",
        "chinese": "图⽚"
      },
      {
        "english": "pig",
        "chinese": "猪"
      },
      {
        "english": "place",
        "chinese": "地⽅"
      },
      {
        "english": "plane",
        "chinese": "⻜机"
      },
      {
        "english": "plant",
        "chinese": "植物"
      },
      {
        "english": "play",
        "chinese": "玩"
      },
      {
        "english": "playground",
        "chinese": "操场"
      },
      {
        "english": "please",
        "chinese": "请"
      },
      {
        "english": "police",
        "chinese": "警察"
      },
      {
        "english": "potato",
        "chinese": "⼟⾖"
      },
      {
        "english": "pupil",
        "chinese": "瞳孔"
      },
      {
        "english": "put",
        "chinese": "放"
      },
      {
        "english": "rain",
        "chinese": "⾬"
      },
      {
        "english": "read",
        "chinese": "读"
      },
      {
        "english": "red",
        "chinese": "红⾊的"
      },
      {
        "english": "rice",
        "chinese": "⽩饭"
      },
      {
        "english": "right",
        "chinese": "正确的"
      },
      {
        "english": "river",
        "chinese": "河"
      },
      {
        "english": "room",
        "chinese": "房间"
      },
      {
        "english": "ruler",
        "chinese": "统治者"
      },
      {
        "english": "run",
        "chinese": "跑"
      },
      {
        "english": "sad",
        "chinese": "伤⼼"
      },
      {
        "english": "say",
        "chinese": "说"
      },
      {
        "english": "school",
        "chinese": "学校"
      },
      {
        "english": "schoolbag",
        "chinese": "书包"
      },
      {
        "english": "science",
        "chinese": "科学"
      },
      {
        "english": "season",
        "chinese": "季节"
      },
      {
        "english": "see",
        "chinese": "看"
      },
      {
        "english": "she",
        "chinese": "她"
      },
      {
        "english": "sheep",
        "chinese": "⽺"
      },
      {
        "english": "ship",
        "chinese": "船"
      },
      {
        "english": "shirt",
        "chinese": "衬衫"
      },
      {
        "english": "shoe",
        "chinese": "鞋⼦"
      },
      {
        "english": "shop",
        "chinese": "店铺"
      },
      {
        "english": "short",
        "chinese": "短的"
      },
      {
        "english": "shorts",
        "chinese": "短裤"
      },
      {
        "english": "sing",
        "chinese": "唱歌"
      },
      {
        "english": "sister",
        "chinese": "姐姐"
      },
      {
        "english": "sit",
        "chinese": "坐"
      },
      {
        "english": "skirt",
        "chinese": "短裙"
      },
      {
        "english": "sleep",
        "chinese": "睡觉"
      },
      {
        "english": "slow",
        "chinese": "减缓"
      },
      {
        "english": "small",
        "chinese": "⼩的"
      },
      {
        "english": "snow",
        "chinese": "雪"
      },
      {
        "english": "sock",
        "chinese": "短袜"
      },
      {
        "english": "some",
        "chinese": "⼀些"
      },
      {
        "english": "sometimes",
        "chinese": "有时"
      },
      {
        "english": "song",
        "chinese": "歌曲"
      },
      {
        "english": "sorry",
        "chinese": "对不起"
      },
      {
        "english": "soup",
        "chinese": "汤"
      },
      {
        "english": "speak",
        "chinese": "说话"
      },
      {
        "english": "sport",
        "chinese": "运动"
      },
      {
        "english": "spring",
        "chinese": "春天"
      },
      {
        "english": "stand",
        "chinese": "站⽴"
      },
      {
        "english": "star",
        "chinese": "星星"
      },
      {
        "english": "stop",
        "chinese": "停⽌"
      },
      {
        "english": "story",
        "chinese": "故事"
      },
      {
        "english": "street",
        "chinese": "街道"
      },
      {
        "english": "strong",
        "chinese": "强的"
      },
      {
        "english": "study",
        "chinese": "学习"
      },
      {
        "english": "subject",
        "chinese": "主题"
      },
      {
        "english": "summer",
        "chinese": "夏天"
      },
      {
        "english": "sun",
        "chinese": "太阳"
      },
      {
        "english": "sunny",
        "chinese": "晴天"
      },
      {
        "english": "supermarket",
        "chinese": "超级市场"
      },
      {
        "english": "sweater",
        "chinese": "⽑⾐"
      },
      {
        "english": "swim",
        "chinese": "游泳"
      },
      {
        "english": "table",
        "chinese": "桌⼦"
      },
      {
        "english": "take",
        "chinese": "拿"
      },
      {
        "english": "talk",
        "chinese": "讲话"
      },
      {
        "english": "tall",
        "chinese": "⾼"
      },
      {
        "english": "taxi",
        "chinese": "出租⻋"
      },
      {
        "english": "tea",
        "chinese": "茶"
      },
      {
        "english": "teacher",
        "chinese": "⽼师"
      },
      {
        "english": "tell",
        "chinese": "告诉"
      },
      {
        "english": "thank",
        "chinese": "感谢"
      },
      {
        "english": "that",
        "chinese": "那"
      },
      {
        "english": "the",
        "chinese": "这"
      },
      {
        "english": "their",
        "chinese": "他们的"
      },
      {
        "english": "them",
        "chinese": "他们"
      },
      {
        "english": "then",
        "chinese": "然后"
      },
      {
        "english": "there",
        "chinese": "那⾥"
      },
      {
        "english": "these",
        "chinese": "这些"
      },
      {
        "english": "they",
        "chinese": "他们"
      },
      {
        "english": "thin",
        "chinese": "薄的"
      },
      {
        "english": "think",
        "chinese": "思考"
      },
      {
        "english": "this",
        "chinese": "这个"
      },
      {
        "english": "those",
        "chinese": "那些"
      },
      {
        "english": "tiger",
        "chinese": "⽼⻁"
      },
      {
        "english": "time",
        "chinese": "时间"
      },
      {
        "english": "tired",
        "chinese": "疲劳的"
      },
      {
        "english": "to",
        "chinese": "⾄"
      },
      {
        "english": "today",
        "chinese": "今天"
      },
      {
        "english": "toilet",
        "chinese": "洗⼿间"
      },
      {
        "english": "tomato",
        "chinese": "番茄"
      },
      {
        "english": "tomorrow",
        "chinese": "明天"
      },
      {
        "english": "too",
        "chinese": "也"
      },
      {
        "english": "toy",
        "chinese": "玩具"
      },
      {
        "english": "train",
        "chinese": "⽕⻋"
      },
      {
        "english": "travel",
        "chinese": "旅⾏"
      },
      {
        "english": "tree",
        "chinese": "树"
      },
      {
        "english": "trousers",
        "chinese": "裤⼦"
      },
      {
        "english": "try",
        "chinese": "尝试"
      },
      {
        "english": "turn",
        "chinese": "转动"
      },
      {
        "english": "TV",
        "chinese": "电视"
      },
      {
        "english": "umbrella",
        "chinese": "伞"
      },
      {
        "english": "uncle",
        "chinese": "叔叔"
      },
      {
        "english": "under",
        "chinese": "在下⾯"
      },
      {
        "english": "up",
        "chinese": "向上"
      },
      {
        "english": "us",
        "chinese": "我们"
      },
      {
        "english": "use",
        "chinese": "利⽤"
      },
      {
        "english": "vegetable",
        "chinese": "蔬菜"
      },
      {
        "english": "very",
        "chinese": "⾮常"
      },
      {
        "english": "visit",
        "chinese": "访问"
      },
      {
        "english": "wait",
        "chinese": "等待"
      },
      {
        "english": "walk",
        "chinese": "⾛"
      },
      {
        "english": "want",
        "chinese": "想"
      },
      {
        "english": "warm",
        "chinese": "温暖的"
      },
      {
        "english": "wash",
        "chinese": "洗"
      },
      {
        "english": "watch",
        "chinese": "⼿表"
      },
      {
        "english": "water",
        "chinese": "⽔"
      },
      {
        "english": "way",
        "chinese": "⽅法"
      },
      {
        "english": "we",
        "chinese": "我们"
      },
      {
        "english": "wear",
        "chinese": "穿"
      },
      {
        "english": "weather",
        "chinese": "天⽓"
      },
      {
        "english": "week",
        "chinese": "星期"
      },
      {
        "english": "welcome",
        "chinese": "欢迎"
      },
      {
        "english": "well",
        "chinese": "出⾊地"
      },
      {
        "english": "what",
        "chinese": "什么"
      },
      {
        "english": "when",
        "chinese": "什么时候"
      },
      {
        "english": "where",
        "chinese": "在哪⾥"
      },
      {
        "english": "white",
        "chinese": "⽩⾊的"
      },
      {
        "english": "who",
        "chinese": "谁"
      },
      {
        "english": "whose",
        "chinese": "谁的"
      },
      {
        "english": "why",
        "chinese": "为什么"
      },
      {
        "english": "window",
        "chinese": "窗户"
      },
      {
        "english": "windy",
        "chinese": "有⻛"
      },
      {
        "english": "winter",
        "chinese": "冬天"
      },
      {
        "english": "with",
        "chinese": "和"
      },
      {
        "english": "woman",
        "chinese": "⼥⼠"
      },
      {
        "english": "women",
        "chinese": "⼥性"
      },
      {
        "english": "wonderful",
        "chinese": "精彩的"
      },
      {
        "english": "word",
        "chinese": "单词"
      },
      {
        "english": "work",
        "chinese": "⼯作"
      },
      {
        "english": "worker",
        "chinese": "⼯⼈"
      },
      {
        "english": "worry",
        "chinese": "担⼼"
      },
      {
        "english": "write",
        "chinese": "写"
      },
      {
        "english": "wrong",
        "chinese": "错误的"
      },
      {
        "english": "year",
        "chinese": "年"
      },
      {
        "english": "yellow",
        "chinese": "⻩⾊"
      },
      {
        "english": "yes",
        "chinese": "是的"
      },
      {
        "english": "yesterday",
        "chinese": "昨天"
      },
      {
        "english": "you",
        "chinese": "你"
      },
      {
        "english": "young",
        "chinese": "年轻的"
      },
      {
        "english": "your",
        "chinese": "您的"
      },
      {
        "english": "zoo",
        "chinese": "动物园"
      }
    ].map(w => ({english: w.english, chinese: w.chinese, right: 0, wrong: 0, createdAt: new Date(), updatedAt: new Date()}));
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Words', words);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Words', null, {});
  }
};
