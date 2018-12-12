import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
// 這也是一個假的API 可以用get post 取得
// 這裡也有提供修改的方法

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const First_nav = [
      {
        isMainChannelCategory: 'false',
        CateUrl: '/TR_Marketing/c/EC_10001447',
        CateID: 'EC_10001447',
        CateName: '最新優惠'
      },
      {
        isMainChannelCategory: 'false',
        CateUrl: '/TR_Brand/c/EC_10001067',
        CateID: 'EC_10001067',
        CateName: '國際名品'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Furniture/c/EC_10000001',
        CateID: 'EC_10000001',
        CateName: '傢俱'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Storage_shelves/c/EC_10000006',
        CateID: 'EC_10000006',
        CateName: '層架收納'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Bedding_Decoration/c/EC_10000002',
        CateID: 'EC_10000002',
        CateName: '寢具傢飾'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Housewares/c/EC_10000003',
        CateID: 'EC_10000003',
        CateName: '居家日用'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_KitchenDinnerware/c/EC_10000004',
        CateID: 'EC_10000004',
        CateName: '餐廚用品'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Gourmet/c/EC_10000005',
        CateID: 'EC_10000005',
        CateName: '美食飲品'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Appliance/c/EC_10000007',
        CateID: 'EC_10000007',
        CateName: '家電淨水'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032091',
        CateID: 'EC_10032091',
        CateName: '廚具衛浴'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Lighting/c/EC_10000008',
        CateID: 'EC_10000008',
        CateName: '燈具'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_Tools_Building/c/EC_10000010',
        CateID: 'EC_10000010',
        CateName: '工具建材'
      },
      {
        isMainChannelCategory: true,
        CateUrl: '/TR_HealthyBeauty/c/EC_10000009',
        CateID: 'EC_10000009',
        CateName: '休閒'
      }
    ];
    
    const Second_nav = {
      LCategories: [
        {
          LCategory: {
            isMainChannelCategory: false,
            CateAdvText: [
              {
                H1Heading: '全站低至↘8折起',
                H2Heading: '愛家卡點數最高回饋12倍',
                EndTime: '2018-12-14 10:59',
                LinkTarget: 'N',
                imagedetailsPk: 8799602866570,
                memo: '1212NEW',
                pk: 8799602866569,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/edm/trplus/181212_1212'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-14 10:50',
                LinkTarget: 'Y',
                imagedetailsPk: 8799602833802,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h2d/h55/9117623222302/9117623222302.jpg',
                memo: '1212NEW',
                pk: 8799602833801,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h5b/he1/9117623156766/9117623156766.jpg',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/edm/trplus/181212_1212'
              }
            ],
            CateUrl: '/TR_Marketing/c/EC_10001447',
            CateID: 'EC_10001447',
            CateName: '最新優惠'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069001',
                    CateID: 'EC_10069001',
                    CateName: 'IRIS'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068015',
                    CateID: 'EC_10068015',
                    CateName: '林氏木業'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069004',
                    CateID: 'EC_10069004',
                    CateName: 'B&D'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069012',
                    CateID: 'EC_10069012',
                    CateName: 'HOLA_米奇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069000',
                    CateID: 'EC_10069000',
                    CateName: 'JosephJoseph'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069002',
                    CateID: 'EC_10069002',
                    CateName: 'WMF'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069005',
                    CateID: 'EC_10069005',
                    CateName: 'Toshiba'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069003',
                    CateID: 'EC_10069003',
                    CateName: 'Lodge'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069006',
                    CateID: 'EC_10069006',
                    CateName: 'KitchenAid'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069011',
                    CateID: 'EC_10069011',
                    CateName: 'BBL'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069007',
                    CateID: 'EC_10069007',
                    CateName: 'ECOVACS'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069009',
                    CateID: 'EC_10069009',
                    CateName: 'NEOFLAM'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068016',
                    CateID: 'EC_10068016',
                    CateName: 'Tefal法國特福'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068017',
                    CateID: 'EC_10068017',
                    CateName: '廚用商品同場加映推薦'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069008',
                    CateID: 'EC_10069008',
                    CateName: '家電商品同場加映推薦'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Marketing/c/EC_10068010',
                CateID: 'EC_10068010',
                CateName: '12大品牌鉅獻'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068018',
                    CateID: 'EC_10068018',
                    CateName: '特力屋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068019',
                    CateID: 'EC_10068019',
                    CateName: 'HOLA特力和樂'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068020',
                    CateID: 'EC_10068020',
                    CateName: 'hoi! 好好生活'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068021',
                    CateID: 'EC_10068021',
                    CateName: '線上獨賣'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Marketing/c/EC_10068011',
                CateID: 'EC_10068011',
                CateName: '完勝推薦TOP強打'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068024',
                    CateID: 'EC_10068024',
                    CateName: '特搜單品$12元起'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Marketing/c/EC_10068013',
                CateID: 'EC_10068013',
                CateName: '狂歡均一價'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10068023',
                    CateID: 'EC_10068023',
                    CateName: '精打細算整箱購'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Marketing/c/EC_10068012',
                CateID: 'EC_10068012',
                CateName: '特推箱購'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069014',
                    CateID: 'EC_10069014',
                    CateName: '家電92折期間限定'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Marketing/c/EC_10068014',
                CateID: 'EC_10068014',
                CateName: '人氣家電92折'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069018',
                    CateID: 'EC_10069018',
                    CateName: '登入領券熱銷商品獨享85折'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069019',
                    CateID: 'EC_10069019',
                    CateName: '登入領券精選商品獨享92折'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069023',
                    CateID: 'EC_10069023',
                    CateName: 'DYSON領券享9折'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069024',
                    CateID: 'EC_10069024',
                    CateName: '登入領券人氣商品獨享9折'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069015',
                    CateID: 'EC_10069015',
                    CateName: '整點搶券滿888折100推薦專區'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069016',
                    CateID: 'EC_10069016',
                    CateName: '整點搶券滿1888折200推薦專區'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Marketing/c/EC_10069017',
                    CateID: 'EC_10069017',
                    CateName: '整點搶券滿5888折600推薦專區'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Marketing/c/EC_10069013',
                CateID: 'EC_10069013',
                CateName: '折價券專區'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: false,
            CateAdvText: [
              {
                H1Heading: '品牌名店大彙集',
                H2Heading: '優質人氣 暢銷精選↘5折起',
                EndTime: '2018-12-31 02:24',
                LinkTarget: 'N',
                imagedetailsPk: 8797174626698,
                memo: '國際名品-選單文字-1219',
                pk: 8797174626697,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Brand/c/EC_10001123'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-31 02:24',
                LinkTarget: 'N',
                imagedetailsPk: 8797698718090,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/he7/h57/9022930059294/9022930059294.jpg',
                memo: '國際名品-bn-WMF',
                pk: 8797698718089,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hae/hfa/9022929993758/9022929993758.jpg',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Brand/c/EC_10001123'
              }
            ],
            CateUrl: '/TR_Brand/c/EC_10001067',
            CateID: 'EC_10001067',
            CateName: '國際名品'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10055033',
                    CateID: 'EC_10055033',
                    CateName: '簡約素色系列'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10055018',
                CateID: 'EC_10055018',
                CateName: 'ELLE'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001177',
                    CateID: 'EC_10001177',
                    CateName: '空氣清淨機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001178',
                    CateID: 'EC_10001178',
                    CateName: '濾網丨耗材'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001176',
                    CateID: 'EC_10001176',
                    CateName: '淨水器丨濾心'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001173',
                    CateID: 'EC_10001173',
                    CateName: '衛浴收納丨用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001174',
                    CateID: 'EC_10001174',
                    CateName: '廚房收納丨用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001175',
                    CateID: 'EC_10001175',
                    CateName: '無痕掛勾丨膠條'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001179',
                    CateID: 'EC_10001179',
                    CateName: '防蹣枕頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001180',
                    CateID: 'EC_10001180',
                    CateName: '防蹣寢具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001181',
                    CateID: 'EC_10001181',
                    CateName: '防蹣床墊丨保潔墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001185',
                    CateID: 'EC_10001185',
                    CateName: '兒童丨居家安全防護'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001183',
                    CateID: 'EC_10001183',
                    CateName: '居家燈具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001184',
                    CateID: 'EC_10001184',
                    CateName: '家用清潔'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001186',
                    CateID: 'EC_10001186',
                    CateName: '個人清潔丨保養'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001187',
                    CateID: 'EC_10001187',
                    CateName: '保健護理'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001188',
                    CateID: 'EC_10001188',
                    CateName: '文具辦公'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001360',
                    CateID: 'EC_10001360',
                    CateName: '工具丨工作護具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001189',
                    CateID: 'EC_10001189',
                    CateName: '車用百貨'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001109',
                CateID: 'EC_10001109',
                CateName: '3M'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001190',
                    CateID: 'EC_10001190',
                    CateName: '雙人寢具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001191',
                    CateID: 'EC_10001191',
                    CateName: '加大寢具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001192',
                    CateID: 'EC_10001192',
                    CateName: '特大寢具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001193',
                    CateID: 'EC_10001193',
                    CateName: '被類丨毯類'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001194',
                    CateID: 'EC_10001194',
                    CateName: '枕類丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001110',
                CateID: 'EC_10001110',
                CateName: 'BBL 百貨寢具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001195',
                    CateID: 'EC_10001195',
                    CateName: '惡魔機丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001196',
                    CateID: 'EC_10001196',
                    CateName: '電鑽丨起子機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001197',
                    CateID: 'EC_10001197',
                    CateName: '研磨工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001198',
                    CateID: 'EC_10001198',
                    CateName: '木工工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001201',
                    CateID: 'EC_10001201',
                    CateName: '園藝工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001202',
                    CateID: 'EC_10001202',
                    CateName: '高壓清洗機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001203',
                    CateID: 'EC_10001203',
                    CateName: '吸塵器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001199',
                    CateID: 'EC_10001199',
                    CateName: '其他工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001200',
                    CateID: 'EC_10001200',
                    CateName: '工具配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001111',
                CateID: 'EC_10001111',
                CateName: 'BLACK+DECKER'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001204',
                    CateID: 'EC_10001204',
                    CateName: '衛浴龍頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001205',
                    CateID: 'EC_10001205',
                    CateName: '淋浴花灑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001206',
                    CateID: 'EC_10001206',
                    CateName: '衛浴配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001207',
                    CateID: 'EC_10001207',
                    CateName: '廚房龍頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001208',
                    CateID: 'EC_10001208',
                    CateName: '廚房配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001112',
                CateID: 'EC_10001112',
                CateName: 'BRAVAT'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001213',
                    CateID: 'EC_10001213',
                    CateName: '衛浴配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001214',
                    CateID: 'EC_10001214',
                    CateName: '廚房配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001113',
                CateID: 'EC_10001113',
                CateName: 'COMPACTOR'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001216',
                    CateID: 'EC_10001216',
                    CateName: '掃地機器人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001217',
                    CateID: 'EC_10001217',
                    CateName: '擦窗機器人'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001114',
                CateID: 'EC_10001114',
                CateName: 'ECOVACS科沃斯'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001219',
                    CateID: 'EC_10001219',
                    CateName: '收納架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001220',
                    CateID: 'EC_10001220',
                    CateName: '收納配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001115',
                CateID: 'EC_10001115',
                CateName: 'HOMEZONE'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001221',
                    CateID: 'EC_10001221',
                    CateName: '收納箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001222',
                    CateID: 'EC_10001222',
                    CateName: '抽屜收納櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001223',
                    CateID: 'EC_10001223',
                    CateName: '木質收納櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001224',
                    CateID: 'EC_10001224',
                    CateName: '衛浴用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001225',
                    CateID: 'EC_10001225',
                    CateName: '寵物用品'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001116',
                CateID: 'EC_10001116',
                CateName: 'IRIS'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001226',
                    CateID: 'EC_10001226',
                    CateName: '塑鋼櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001227',
                    CateID: 'EC_10001227',
                    CateName: '工具箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001228',
                    CateID: 'EC_10001228',
                    CateName: '戶外傢俱'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001117',
                CateID: 'EC_10001117',
                CateName: 'KETER'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001232',
                    CateID: 'EC_10001232',
                    CateName: '多功能攪拌機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001234',
                    CateID: 'EC_10001234',
                    CateName: '果汁攪拌機'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001118',
                CateID: 'EC_10001118',
                CateName: 'KitchenAid'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/rootCategory/%E7%89%B9%E5%8A%9B%2B/%E5%9C%8B%E9%9A%9B%E5%90%8D%E5%93%81/LA-Z-BOY/%E4%BC%91%E9%96%92%E6%A4%85%E4%B8%A8%E5%85%A8%E7%89%9B%E7%9A%AE/c/EC_10001235',
                    CateID: 'EC_10001235',
                    CateName: '休閒椅丨全牛皮'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001236',
                    CateID: 'EC_10001236',
                    CateName: '休閒椅丨半牛皮'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001237',
                    CateID: 'EC_10001237',
                    CateName: '休閒椅丨布款'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001119',
                CateID: 'EC_10001119',
                CateName: 'LA-Z-BOY'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10034003',
                    CateID: 'EC_10034003',
                    CateName: '煎鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10034005',
                    CateID: 'EC_10034005',
                    CateName: '荷蘭鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10034006',
                    CateID: 'EC_10034006',
                    CateName: '煎盤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10034008',
                    CateID: 'EC_10034008',
                    CateName: '鍋具配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10034002',
                CateID: 'EC_10034002',
                CateName: 'Lodge'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10038000',
                    CateID: 'EC_10038000',
                    CateName: '最新活動'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001242',
                    CateID: 'EC_10001242',
                    CateName: '記憶枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10038001',
                    CateID: 'EC_10038001',
                    CateName: '嬰童記憶枕丨外用枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001238',
                    CateID: 'EC_10001238',
                    CateName: '記憶床墊丨單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001239',
                    CateID: 'EC_10001239',
                    CateName: '記憶床墊丨單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001240',
                    CateID: 'EC_10001240',
                    CateName: '記憶床墊丨標準雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001341',
                    CateID: 'EC_10001341',
                    CateName: '記憶床墊丨雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10038002',
                    CateID: 'EC_10038002',
                    CateName: '記憶床墊丨雙人特規'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001241',
                    CateID: 'EC_10001241',
                    CateName: '記憶床墊丨兒童嬰幼'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001244',
                    CateID: 'EC_10001244',
                    CateName: '減壓生活精品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001243',
                    CateID: 'EC_10001243',
                    CateName: '床包丨透氣墊丨毯類'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001120',
                CateID: 'EC_10001120',
                CateName: 'TENDAYS 百貨床枕'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001245',
                    CateID: 'EC_10001245',
                    CateName: 'LED燈泡'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001248',
                    CateID: 'EC_10001248',
                    CateName: 'LED崁燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001246',
                    CateID: 'EC_10001246',
                    CateName: 'LED吸頂燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001121',
                CateID: 'EC_10001121',
                CateName: 'TOSHIBA東芝'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001267',
                    CateID: 'EC_10001267',
                    CateName: '湯鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001268',
                    CateID: 'EC_10001268',
                    CateName: '油炸丨煎烤鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001269',
                    CateID: 'EC_10001269',
                    CateName: '炒鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001270',
                    CateID: 'EC_10001270',
                    CateName: '快易鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001271',
                    CateID: 'EC_10001271',
                    CateName: '鍋具丨其他配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001272',
                    CateID: 'EC_10001272',
                    CateName: '廚用刀具丨工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001274',
                    CateID: 'EC_10001274',
                    CateName: '碗盤餐具丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001123',
                CateID: 'EC_10001123',
                CateName: 'WMF'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001277',
                    CateID: 'EC_10001277',
                    CateName: '平底鍋丨炒鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Brand/c/EC_10001278',
                    CateID: 'EC_10001278',
                    CateName: '湯鍋丨調理鍋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Brand/c/EC_10001124',
                CateID: 'EC_10001124',
                CateName: '法國畢耶de Buyer'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '情感增溫',
                H2Heading: '享受家人歡聚時光',
                EndTime: '2019-01-01 00:00',
                LinkTarget: 'N',
                imagedetailsPk: 8797897030026,
                memo: '20180103-CNY傢俱',
                pk: 8797897030025,
                H3Heading: '複合式傢俱↘8折起',
                Queue: 0,
                Link: 'http://bit.ly/2PUFhvX'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2019-01-01 00:00',
                LinkTarget: 'N',
                imagedetailsPk: 8796814801290,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hc5/hbd/9114097057822/9114097057822.jpg',
                memo: '傢俱',
                pk: 8796814801289,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h9e/hee/9114096992286/9114096992286.jpg',
                Queue: 0,
                Link: 'http://bit.ly/2PUFhvX'
              }
            ],
            CateUrl: '/TR_Furniture/c/EC_10000001',
            CateID: 'EC_10000001',
            CateName: '傢俱'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001411',
                    CateID: 'EC_10001411',
                    CateName: '門店TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001410',
                    CateID: 'EC_10001410',
                    CateName: '新品上市搶鮮購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001128',
                    CateID: 'EC_10001128',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001685',
                    CateID: 'EC_10001685',
                    CateName: '1212獨家優惠專區'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001686',
                    CateID: 'EC_10001686',
                    CateName: '人氣餐桌椅│餐櫃999起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001687',
                    CateID: 'EC_10001687',
                    CateName: '多功能電腦椅3折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001688',
                    CateID: 'EC_10001688',
                    CateName: '年終下殺邊桌│茶几299起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001689',
                    CateID: 'EC_10001689',
                    CateName: '成套房間组5折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001690',
                    CateID: 'EC_10001690',
                    CateName: '成套客廳家具5折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001691',
                    CateID: 'EC_10001691',
                    CateName: '收納書桌│書櫃199起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001692',
                    CateID: 'EC_10001692',
                    CateName: '限時促銷沙發│和室椅599起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001693',
                    CateID: 'EC_10001693',
                    CateName: '記憶│乳膠│獨立筒床墊699起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001412',
                    CateID: 'EC_10001412',
                    CateName: '超值百款衣櫃│衣帽架349起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001413',
                    CateID: 'EC_10001413',
                    CateName: '熱銷機能鞋櫃│鞋架569起'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Furniture/c/EC_10001071',
                CateID: 'EC_10001071',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10056001',
                    CateID: 'EC_10056001',
                    CateName: '書房傢俱↘8折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10061081',
                    CateID: 'EC_10061081',
                    CateName: '客廳傢俱↘5折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10061082',
                    CateID: 'EC_10061082',
                    CateName: '溫馨臥室傢俱↘65折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10061083',
                    CateID: 'EC_10061083',
                    CateName: '童趣兒童房↘55折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10061084',
                    CateID: 'EC_10061084',
                    CateName: '廚房傢俱↘75折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10061085',
                    CateID: 'EC_10061085',
                    CateName: '低甲醛傢俱↘7折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10061086',
                    CateID: 'EC_10061086',
                    CateName: '寵物傢俱↘6折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10066000',
                    CateID: 'EC_10066000',
                    CateName: 'hoi!推薦 客廳傢俱↘7折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10066001',
                    CateID: 'EC_10066001',
                    CateName: 'hoi!推薦 餐廚│書房傢俱↘85折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10066002',
                    CateID: 'EC_10066002',
                    CateName: 'hoi!推薦 臥室傢俱↘75折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10024023',
                    CateID: 'EC_10024023',
                    CateName: '熱銷傢俱百品↘88折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10039008',
                    CateID: 'EC_10039008',
                    CateName: 'IRIS木質堆疊櫃↘6折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10039009',
                    CateID: 'EC_10039009',
                    CateName: 'HOLA時尚風格家俱↘65折起'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Furniture/c/EC_10024022',
                CateID: 'EC_10024022',
                CateName: '★傢俱熱搜推薦'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000118',
                    CateID: 'EC_10000118',
                    CateName: '傘架丨衣帽架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000119',
                    CateID: 'EC_10000119',
                    CateName: '邊桌丨茶几'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000120',
                    CateID: 'EC_10000120',
                    CateName: '鞋架丨穿鞋椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000121',
                    CateID: 'EC_10000121',
                    CateName: '鞋櫃開放式'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000122',
                    CateID: 'EC_10000122',
                    CateName: '鞋櫃單丨雙門'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000123',
                    CateID: 'EC_10000123',
                    CateName: '鞋櫃三丨四門'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000125',
                    CateID: 'EC_10000125',
                    CateName: '收納丨展示櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000134',
                    CateID: 'EC_10000134',
                    CateName: '電視丨視聽櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000126',
                    CateID: 'EC_10000126',
                    CateName: '雜誌丨書報架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000127',
                    CateID: 'EC_10000127',
                    CateName: '和室丨折疊桌'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000128',
                    CateID: 'EC_10000128',
                    CateName: '布沙發丨單人座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000129',
                    CateID: 'EC_10000129',
                    CateName: '布沙發丨二人座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000130',
                    CateID: 'EC_10000130',
                    CateName: '布沙發丨三人座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000131',
                    CateID: 'EC_10000131',
                    CateName: '布沙發丨L型沙發'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000133',
                    CateID: 'EC_10000133',
                    CateName: '布沙發組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001316',
                    CateID: 'EC_10001316',
                    CateName: '皮沙發丨單人座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001317',
                    CateID: 'EC_10001317',
                    CateName: '皮沙發丨二人座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001318',
                    CateID: 'EC_10001318',
                    CateName: '皮沙發丨三人座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001319',
                    CateID: 'EC_10001319',
                    CateName: '皮沙發丨L型沙發'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001320',
                    CateID: 'EC_10001320',
                    CateName: '皮沙發組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000132',
                    CateID: 'EC_10000132',
                    CateName: '沙發床'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000135',
                    CateID: 'EC_10000135',
                    CateName: '椅凳丨收納椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000136',
                    CateID: 'EC_10000136',
                    CateName: '躺椅丨休閒椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000137',
                    CateID: 'EC_10000137',
                    CateName: '和室椅丨懶骨頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000124',
                    CateID: 'EC_10000124',
                    CateName: '屏風丨隔間櫃'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Furniture/c/EC_10000011',
                CateID: 'EC_10000011',
                CateName: '客廳傢俱'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000140',
                    CateID: 'EC_10000140',
                    CateName: 'L型電腦桌(無鍵盤)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000141',
                    CateID: 'EC_10000141',
                    CateName: '書桌丨電腦桌寬89cm↓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000142',
                    CateID: 'EC_10000142',
                    CateName: '書桌丨電腦桌寬90cm~119cm'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000143',
                    CateID: 'EC_10000143',
                    CateName: '書桌丨電腦桌寬120cm↑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000144',
                    CateID: 'EC_10000144',
                    CateName: '書櫃丨收納櫃89cm↓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000145',
                    CateID: 'EC_10000145',
                    CateName: '書櫃丨收納櫃90cm~119cm'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000146',
                    CateID: 'EC_10000146',
                    CateName: '書櫃丨收納櫃120cm↑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000147',
                    CateID: 'EC_10000147',
                    CateName: '書架丨桌上收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000148',
                    CateID: 'EC_10000148',
                    CateName: '活動櫃丨抽屜櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000149',
                    CateID: 'EC_10000149',
                    CateName: '主機丨鍵盤架丨螢幕架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000150',
                    CateID: 'EC_10000150',
                    CateName: '電腦椅丨全網'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000151',
                    CateID: 'EC_10000151',
                    CateName: '電腦椅丨半網'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000152',
                    CateID: 'EC_10000152',
                    CateName: '電腦椅丨布面'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000153',
                    CateID: 'EC_10000153',
                    CateName: '電腦椅丨皮面'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000154',
                    CateID: 'EC_10000154',
                    CateName: '電腦椅丨人體工學'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000138',
                    CateID: 'EC_10000138',
                    CateName: 'OA辦公桌'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Furniture/c/EC_10000012',
                CateID: 'EC_10000012',
                CateName: '書房傢俱'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000155',
                    CateID: 'EC_10000155',
                    CateName: '床頭片丨床頭箱-單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000156',
                    CateID: 'EC_10000156',
                    CateName: '床底座丨床台-單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000157',
                    CateID: 'EC_10000157',
                    CateName: '掀床底座-單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001327',
                    CateID: 'EC_10001327',
                    CateName: '床頭片丨床頭箱-單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001328',
                    CateID: 'EC_10001328',
                    CateName: '床底座丨床台-單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001329',
                    CateID: 'EC_10001329',
                    CateName: '掀床底座-單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001321',
                    CateID: 'EC_10001321',
                    CateName: '床頭片丨床頭箱-雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001322',
                    CateID: 'EC_10001322',
                    CateName: '床底座丨床台-雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001323',
                    CateID: 'EC_10001323',
                    CateName: '掀床底座-雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001324',
                    CateID: 'EC_10001324',
                    CateName: '床頭片丨床頭箱-雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001325',
                    CateID: 'EC_10001325',
                    CateName: '床底座丨床台-雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001326',
                    CateID: 'EC_10001326',
                    CateName: '掀床底座-雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000158',
                    CateID: 'EC_10000158',
                    CateName: '床頭櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000159',
                    CateID: 'EC_10000159',
                    CateName: '斗櫃丨三~五抽'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000160',
                    CateID: 'EC_10000160',
                    CateName: '斗櫃丨六~九抽'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000161',
                    CateID: 'EC_10000161',
                    CateName: '精選房間組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000162',
                    CateID: 'EC_10000162',
                    CateName: '雙層丨子母床'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000163',
                    CateID: 'EC_10000163',
                    CateName: '化妝桌椅丨鏡子'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000164',
                    CateID: 'EC_10000164',
                    CateName: '衣櫃丨單、雙門'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000165',
                    CateID: 'EC_10000165',
                    CateName: '衣櫃丨三、四門'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000166',
                    CateID: 'EC_10000166',
                    CateName: '半丨開放式衣櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000167',
                    CateID: 'EC_10000167',
                    CateName: '衣架丨穿衣鏡'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Furniture/c/EC_10000013',
                CateID: 'EC_10000013',
                CateName: '臥室傢俱'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000173',
                    CateID: 'EC_10000173',
                    CateName: '餐桌丨餐椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10001045',
                    CateID: 'EC_10001045',
                    CateName: '餐車'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000174',
                    CateID: 'EC_10000174',
                    CateName: '餐桌椅組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000172',
                    CateID: 'EC_10000172',
                    CateName: '吧台椅丨吧台桌'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000175',
                    CateID: 'EC_10000175',
                    CateName: '收納丨電器櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000176',
                    CateID: 'EC_10000176',
                    CateName: '碗盤丨隙縫櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000177',
                    CateID: 'EC_10000177',
                    CateName: '兒童餐椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001430',
                    CateID: 'EC_10001430',
                    CateName: '餐廚︱電器下座 3.9尺↓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001431',
                    CateID: 'EC_10001431',
                    CateName: '餐廚︱電器下座 4尺↑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001432',
                    CateID: 'EC_10001432',
                    CateName: '餐廚︱電器全組 3.9尺↓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001433',
                    CateID: 'EC_10001433',
                    CateName: '餐廚︱電器全組  4尺↑'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Furniture/c/EC_10000015',
                CateID: 'EC_10000015',
                CateName: '餐廚傢俱'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000168',
                    CateID: 'EC_10000168',
                    CateName: '床組丨房間組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000169',
                    CateID: 'EC_10000169',
                    CateName: '成長桌丨椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000170',
                    CateID: 'EC_10000170',
                    CateName: '衣櫃丨斗櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000171',
                    CateID: 'EC_10000171',
                    CateName: '書櫃丨書架'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Furniture/c/EC_10000014',
                CateID: 'EC_10000014',
                CateName: '兒童傢俱'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027011',
                    CateID: 'EC_10027011',
                    CateName: '記憶床墊 - 單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027012',
                    CateID: 'EC_10027012',
                    CateName: '記憶床墊 - 單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027013',
                    CateID: 'EC_10027013',
                    CateName: '記憶床墊 - 雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027014',
                    CateID: 'EC_10027014',
                    CateName: '記憶床墊 - 雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027015',
                    CateID: 'EC_10027015',
                    CateName: '乳膠床墊 - 單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027016',
                    CateID: 'EC_10027016',
                    CateName: '乳膠床墊 - 單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027017',
                    CateID: 'EC_10027017',
                    CateName: '乳膠床墊 - 雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027018',
                    CateID: 'EC_10027018',
                    CateName: '乳膠床墊 - 雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027019',
                    CateID: 'EC_10027019',
                    CateName: '彈簧床墊 - 單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027020',
                    CateID: 'EC_10027020',
                    CateName: '彈簧床墊 - 單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027021',
                    CateID: 'EC_10027021',
                    CateName: '彈簧床墊 - 雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027022',
                    CateID: 'EC_10027022',
                    CateName: '彈簧床墊 - 雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027023',
                    CateID: 'EC_10027023',
                    CateName: '獨立筒床墊 - 單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027024',
                    CateID: 'EC_10027024',
                    CateName: '獨立筒床墊 - 單人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027025',
                    CateID: 'EC_10027025',
                    CateName: '獨立筒床墊 - 雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027026',
                    CateID: 'EC_10027026',
                    CateName: '獨立筒床墊 - 雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027027',
                    CateID: 'EC_10027027',
                    CateName: '日式︱折疊床墊 - 單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027029',
                    CateID: 'EC_10027029',
                    CateName: '日式︱折疊床墊 - 雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027030',
                    CateID: 'EC_10027030',
                    CateName: '日式︱折疊床墊 - 雙人加大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027031',
                    CateID: 'EC_10027031',
                    CateName: '兒童︱嬰兒床墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10027032',
                    CateID: 'EC_10027032',
                    CateName: '涼感︱冷凝床墊'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Furniture/c/EC_10027009',
                CateID: 'EC_10027009',
                CateName: '床墊'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000178',
                    CateID: 'EC_10000178',
                    CateName: '折疊桌丨椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000179',
                    CateID: 'EC_10000179',
                    CateName: '躺椅丨休閒椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000180',
                    CateID: 'EC_10000180',
                    CateName: '戶外桌椅組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000181',
                    CateID: 'EC_10000181',
                    CateName: '遮陽傘丨座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Furniture/c/EC_10000182',
                    CateID: 'EC_10000182',
                    CateName: '戶外桌丨椅'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Furniture/c/EC_10000016',
                CateID: 'EC_10000016',
                CateName: '戶外傢俱'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001773',
                    CateID: 'EC_10001773',
                    CateName: '邊桌│活動櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001770',
                    CateID: 'EC_10001770',
                    CateName: '書櫃丨收納櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001772',
                    CateID: 'EC_10001772',
                    CateName: '鞋架│鞋櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001771',
                    CateID: 'EC_10001771',
                    CateName: '精選房間組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001769',
                    CateID: 'EC_10001769',
                    CateName: '書桌│書架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001768',
                    CateID: 'EC_10001768',
                    CateName: '衣櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10001767',
                    CateID: 'EC_10001767',
                    CateName: '斗櫃'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Furniture/c/EC_10001741',
                CateID: 'EC_10001741',
                CateName: 'Hopma DIY家具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027165',
                    CateID: 'EC_10027165',
                    CateName: '床墊系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027170',
                    CateID: 'EC_10027170',
                    CateName: '斗櫃│衣櫃系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027168',
                    CateID: 'EC_10027168',
                    CateName: '餐桌椅系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027166',
                    CateID: 'EC_10027166',
                    CateName: '沙發系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027169',
                    CateID: 'EC_10027169',
                    CateName: '書桌椅系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027163',
                    CateID: 'EC_10027163',
                    CateName: '精選房間組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027167',
                    CateID: 'EC_10027167',
                    CateName: '沙發床系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027171',
                    CateID: 'EC_10027171',
                    CateName: '兒童家具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Furniture/c/EC_10027164',
                    CateID: 'EC_10027164',
                    CateName: '電視櫃│茶几│置物架'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Furniture/c/EC_10027162',
                CateID: 'EC_10027162',
                CateName: 'H&D│obis設計家具'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: 'HOUSE收納箱/櫃',
                H2Heading: '',
                EndTime: '2018-12-22 23:59',
                LinkTarget: 'N',
                imagedetailsPk: 8799603620234,
                pk: 8799603620233,
                H3Heading: '限時下殺搶購↘4折起',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Storage_shelves/c/EC_10069026'
              },
              {
                H1Heading: '收出自我風格',
                H2Heading: '紅利金最高折抵 20%',
                EndTime: '2018-12-12 23:59',
                LinkTarget: 'N',
                imagedetailsPk: 8799603587466,
                memo: '20180530_DIY',
                pk: 8799603587465,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Storage_shelves/c/EC_10001399'
              },
              {
                H1Heading: '收出自我風格',
                H2Heading: '紅利金最高折抵 20%',
                EndTime: '2018-12-31 04:01',
                LinkTarget: 'N',
                imagedetailsPk: 8797176527242,
                memo: '20180530_DIY',
                pk: 8797176527241,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Storage_shelves/c/EC_10001399'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-22 23:59',
                LinkTarget: 'N',
                imagedetailsPk: 8799403342218,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h62/hc1/9120668745758/9120668745758.gif',
                memo: '180524_層架收納',
                pk: 8799403342217,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hbd/haf/9120668680222/9120668680222.gif',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Storage_shelves/c/EC_10069026'
              }
            ],
            CateUrl: '/TR_Storage_shelves/c/EC_10000006',
            CateID: 'EC_10000006',
            CateName: '層架收納'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10060030',
                    CateID: 'EC_10060030',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10060033',
                    CateID: 'EC_10060033',
                    CateName: '本月TOP暢銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10060034',
                    CateID: 'EC_10060034',
                    CateName: '新品上市搶鮮購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069025',
                    CateID: 'EC_10069025',
                    CateName: '4折up►12月慶下殺推薦'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069026',
                    CateID: 'EC_10069026',
                    CateName: '4折起►HOUSE收納箱/櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069027',
                    CateID: 'EC_10069027',
                    CateName: '5折up►Incare小物收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069029',
                    CateID: 'EC_10069029',
                    CateName: '61折起►日本JEJ收納箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069028',
                    CateID: 'EC_10069028',
                    CateName: '5折起►+O家窩收納箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069030',
                    CateID: 'EC_10069030',
                    CateName: '67折up►日需收納歲末回饋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069032',
                    CateID: 'EC_10069032',
                    CateName: '75折up►YOLE收納掛袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069033',
                    CateID: 'EC_10069033',
                    CateName: '8折►探索生活鐵力士架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10069034',
                    CateID: 'EC_10069034',
                    CateName: '9折►QUALY設計生活'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Storage_shelves/c/EC_10060029',
                CateID: 'EC_10060029',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10038022',
                    CateID: 'EC_10038022',
                    CateName: '鍍鉻層架︱烤漆層架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10038025',
                    CateID: 'EC_10038025',
                    CateName: '鍍鉻配件︱烤漆配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10038026',
                    CateID: 'EC_10038026',
                    CateName: '金屬層架︱細縫收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10043008',
                    CateID: 'EC_10043008',
                    CateName: '木質層架︱抽屜櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10043009',
                    CateID: 'EC_10043009',
                    CateName: '桌上收納︱小物收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10043010',
                    CateID: 'EC_10043010',
                    CateName: '收納箱︱附輪整理箱'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Storage_shelves/c/EC_10038018',
                CateID: 'EC_10038018',
                CateName: '大男人工作室►8折起'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10001310',
                    CateID: 'EC_10001310',
                    CateName: '鍍鉻丨烤漆三層架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10001311',
                    CateID: 'EC_10001311',
                    CateName: '鍍鉻丨烤漆四層架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10001312',
                    CateID: 'EC_10001312',
                    CateName: '鍍鉻丨烤漆五層架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000504',
                    CateID: 'EC_10000504',
                    CateName: '鍍鉻衣架組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000505',
                    CateID: 'EC_10000505',
                    CateName: '烤漆衣架組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000506',
                    CateID: 'EC_10000506',
                    CateName: '其他置物架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000498',
                    CateID: 'EC_10000498',
                    CateName: '鍍鉻一般型(荷重80KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000499',
                    CateID: 'EC_10000499',
                    CateName: '烤漆一般型(荷重80KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000500',
                    CateID: 'EC_10000500',
                    CateName: '鍍鉻重型(荷重200KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000501',
                    CateID: 'EC_10000501',
                    CateName: '烤漆重型(荷重200KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000502',
                    CateID: 'EC_10000502',
                    CateName: '鍍鉻加強型(荷重250KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000503',
                    CateID: 'EC_10000503',
                    CateName: '烤漆加強型(荷重250KG以下)'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000056',
                CateID: 'EC_10000056',
                CateName: '鍍鉻丨烤漆層架組'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000507',
                    CateID: 'EC_10000507',
                    CateName: '鍍鉻活動架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000508',
                    CateID: 'EC_10000508',
                    CateName: '烤漆活動架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000509',
                    CateID: 'EC_10000509',
                    CateName: '其他活動架'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000057',
                CateID: 'EC_10000057',
                CateName: '鍍鉻丨烤漆活動架'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000510',
                    CateID: 'EC_10000510',
                    CateName: '鍍鉻一般型(荷重80KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000511',
                    CateID: 'EC_10000511',
                    CateName: '烤漆一般型(荷重80KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000512',
                    CateID: 'EC_10000512',
                    CateName: '鍍鉻重型(荷重200KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000513',
                    CateID: 'EC_10000513',
                    CateName: '烤漆重型(荷重200KG以下)'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000515',
                    CateID: 'EC_10000515',
                    CateName: '烤漆加強型(荷重250KG以下)'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000058',
                CateID: 'EC_10000058',
                CateName: '鍍鉻丨烤漆鐵網'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000516',
                    CateID: 'EC_10000516',
                    CateName: '鍍鉻鐵管'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000517',
                    CateID: 'EC_10000517',
                    CateName: '烤漆鐵管'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000059',
                CateID: 'EC_10000059',
                CateName: '鍍鉻丨烤漆鐵管'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000518',
                    CateID: 'EC_10000518',
                    CateName: '邊條丨邊片丨側網'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000519',
                    CateID: 'EC_10000519',
                    CateName: '吊衣桿丨衣勾丨掛勾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000520',
                    CateID: 'EC_10000520',
                    CateName: '拉網丨拉籃丨掛籃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000521',
                    CateID: 'EC_10000521',
                    CateName: '墊片丨木層板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000522',
                    CateID: 'EC_10000522',
                    CateName: '其它組裝配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000060',
                CateID: 'EC_10000060',
                CateName: '鍍鉻丨層架配件'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000523',
                    CateID: 'EC_10000523',
                    CateName: '木質層架丨衣架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000526',
                    CateID: 'EC_10000526',
                    CateName: '木質活動架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000524',
                    CateID: 'EC_10000524',
                    CateName: '木質層板丨牆角架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000525',
                    CateID: 'EC_10000525',
                    CateName: '木質托架'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000061',
                CateID: 'EC_10000061',
                CateName: '木質收納'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000527',
                    CateID: 'EC_10000527',
                    CateName: '塑鋼功能層櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000528',
                    CateID: 'EC_10000528',
                    CateName: '電器架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000530',
                    CateID: 'EC_10000530',
                    CateName: '金屬架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000529',
                    CateID: 'EC_10000529',
                    CateName: '電視架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000531',
                    CateID: 'EC_10000531',
                    CateName: '金屬托架丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000532',
                    CateID: 'EC_10000532',
                    CateName: '金屬籃'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000062',
                CateID: 'EC_10000062',
                CateName: '塑鋼丨金屬收納'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000533',
                    CateID: 'EC_10000533',
                    CateName: '抽屜-單層'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000534',
                    CateID: 'EC_10000534',
                    CateName: '抽屜-二三層'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000535',
                    CateID: 'EC_10000535',
                    CateName: '抽屜-四層'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000536',
                    CateID: 'EC_10000536',
                    CateName: '抽屜-五層'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000537',
                    CateID: 'EC_10000537',
                    CateName: '抽屜隔板'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000063',
                CateID: 'EC_10000063',
                CateName: '抽屜收納櫃'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000557',
                    CateID: 'EC_10000557',
                    CateName: '桌上收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000558',
                    CateID: 'EC_10000558',
                    CateName: '面紙盒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000560',
                    CateID: 'EC_10000560',
                    CateName: '飾品收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000562',
                    CateID: 'EC_10000562',
                    CateName: '整理收納盒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000561',
                    CateID: 'EC_10000561',
                    CateName: '雜誌架丨事務收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000563',
                    CateID: 'EC_10000563',
                    CateName: '編織籃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000559',
                    CateID: 'EC_10000559',
                    CateName: '兒童收納'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000066',
                CateID: 'EC_10000066',
                CateName: '辦公丨小物收納'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000549',
                    CateID: 'EC_10000549',
                    CateName: '各式防塵套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000550',
                    CateID: 'EC_10000550',
                    CateName: '吊掛袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000551',
                    CateID: 'EC_10000551',
                    CateName: '衣物防塵套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000552',
                    CateID: 'EC_10000552',
                    CateName: '棉被整理袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000553',
                    CateID: 'EC_10000553',
                    CateName: '壓縮袋-手捲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000554',
                    CateID: 'EC_10000554',
                    CateName: '壓縮袋-平面'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000555',
                    CateID: 'EC_10000555',
                    CateName: '壓縮袋-立體'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000556',
                    CateID: 'EC_10000556',
                    CateName: '壓縮袋-組合'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000065',
                CateID: 'EC_10000065',
                CateName: '防塵丨壓縮袋'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000565',
                    CateID: 'EC_10000565',
                    CateName: '鞋架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000564',
                    CateID: 'EC_10000564',
                    CateName: '靴夾丨撐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000566',
                    CateID: 'EC_10000566',
                    CateName: '鞋盒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000567',
                    CateID: 'EC_10000567',
                    CateName: '鞋袋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000067',
                CateID: 'EC_10000067',
                CateName: '鞋類收納'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000544',
                    CateID: 'EC_10000544',
                    CateName: '布質收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000538',
                    CateID: 'EC_10000538',
                    CateName: '直取式收納箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000539',
                    CateID: 'EC_10000539',
                    CateName: '塑膠整理箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000542',
                    CateID: 'EC_10000542',
                    CateName: '床下收納箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000541',
                    CateID: 'EC_10000541',
                    CateName: '塑膠置物架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000540',
                    CateID: 'EC_10000540',
                    CateName: '隙縫收納架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000543',
                    CateID: 'EC_10000543',
                    CateName: '塑膠籃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000545',
                    CateID: 'EC_10000545',
                    CateName: '牛津布66L以上'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000546',
                    CateID: 'EC_10000546',
                    CateName: '牛津布66L以下'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000547',
                    CateID: 'EC_10000547',
                    CateName: '收納箱丨盒丨椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000548',
                    CateID: 'EC_10000548',
                    CateName: '其他'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000064',
                CateID: 'EC_10000064',
                CateName: '整理丨收納箱'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000568',
                    CateID: 'EC_10000568',
                    CateName: '其它掛勾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000569',
                    CateID: 'EC_10000569',
                    CateName: '橫桿掛勾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000570',
                    CateID: 'EC_10000570',
                    CateName: '黏貼掛勾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000571',
                    CateID: 'EC_10000571',
                    CateName: '吸盤掛勾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000572',
                    CateID: 'EC_10000572',
                    CateName: '掃具掛勾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000573',
                    CateID: 'EC_10000573',
                    CateName: 'S型掛勾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10001043',
                    CateID: 'EC_10001043',
                    CateName: '其他掛勾'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Storage_shelves/c/EC_10000068',
                CateID: 'EC_10000068',
                CateName: '掛勾'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10032040',
                    CateID: 'EC_10032040',
                    CateName: '烤漆層架│寬90-120cm'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Storage_shelves/c/EC_10032041',
                    CateID: 'EC_10032041',
                    CateName: '烤漆層架│專用配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Storage_shelves/c/EC_10031033',
                CateID: 'EC_10031033',
                CateName: 'dayneeds │日需百備'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '年終大換裝',
                H2Heading: '限時↘指定再8折',
                EndTime: '2018-12-13 00:00',
                LinkTarget: 'N',
                imagedetailsPk: 8799599360394,
                memo: '5折up►12月慶下殺推薦',
                pk: 8799599360393,
                H3Heading: '',
                Queue: 0,
                Link: 'http://bit.ly/2RnV8Eo'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-15 00:00',
                LinkTarget: 'N',
                imagedetailsPk: 8799599327626,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hfe/h09/9111097737246/9111097737246.gif',
                memo: '5折up►HOYACASA寢具',
                pk: 8799599327625,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/he6/h14/9111097671710/9111097671710.gif',
                Queue: 0,
                Link: 'http://bit.ly/2ABP1VI'
              }
            ],
            CateUrl: '/TR_Bedding_Decoration/c/EC_10000002',
            CateID: 'EC_10000002',
            CateName: '寢具傢飾'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001345',
                    CateID: 'EC_10001345',
                    CateName: '5折up►12月慶下殺推薦'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10025020',
                    CateID: 'EC_10025020',
                    CateName: '門店TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001344',
                    CateID: 'EC_10001344',
                    CateName: '4折up►精選均一價1212'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001348',
                    CateID: 'EC_10001348',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001347',
                    CateID: 'EC_10001347',
                    CateName: '5折up►HOYACASA寢具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001672',
                    CateID: 'EC_10001672',
                    CateName: '新品上市搶鮮購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001346',
                    CateID: 'EC_10001346',
                    CateName: '5折up►BBL精梳棉床寢'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10025034',
                    CateID: 'EC_10025034',
                    CateName: '77折up►夢工場兩用被組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001671',
                    CateID: 'EC_10001671',
                    CateName: '66折up►GOLDEN-TIME'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001575',
                    CateID: 'EC_10001575',
                    CateName: '63折up►House door記憶枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001354',
                    CateID: 'EC_10001354',
                    CateName: '5折up►Incare仿真壁貼下殺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10025033',
                    CateID: 'EC_10025033',
                    CateName: '6折►橙品油畫布精選系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001343',
                    CateID: 'EC_10001343',
                    CateName: '389起►達摩客聖誕節用品'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10001075',
                CateID: 'EC_10001075',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10059000',
                    CateID: 'EC_10059000',
                    CateName: '床包床被組↘7折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10059002',
                    CateID: 'EC_10059002',
                    CateName: '童趣寢具↘5折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10059005',
                    CateID: 'EC_10059005',
                    CateName: '選對好枕 ｜枕頭↘3折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10059007',
                    CateID: 'EC_10059007',
                    CateName: '親膚被｜毯↘3折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10059009',
                    CateID: 'EC_10059009',
                    CateName: '舒適床墊↘5折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10059011',
                    CateID: 'EC_10059011',
                    CateName: '防髒污保潔墊↘4折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10037000',
                    CateID: 'EC_10037000',
                    CateName: '換裝好佈置↘7折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10056002',
                    CateID: 'EC_10056002',
                    CateName: '莫蘭迪色寢具↘5折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10039007',
                    CateID: 'EC_10039007',
                    CateName: '寢具 Sale!↘3折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10032114',
                    CateID: 'EC_10032114',
                    CateName: 'LaSova↘8折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10038004',
                    CateID: 'EC_10038004',
                    CateName: '3M寢具↘65折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10033006',
                    CateID: 'EC_10033006',
                    CateName: '遮光窗簾↘75折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10033007',
                    CateID: 'EC_10033007',
                    CateName: '涼夏特輯-冷凝墊/麻將蓆↘65折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10042032',
                    CateID: 'EC_10042032',
                    CateName: '紀念每一刻↘62折起'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10032113',
                CateID: 'EC_10032113',
                CateName: '秋冬寢具換新裝'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10064013',
                    CateID: 'EC_10064013',
                    CateName: '聖誕樹1-2尺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10064015',
                    CateID: 'EC_10064015',
                    CateName: '聖誕樹5-6尺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10064016',
                    CateID: 'EC_10064016',
                    CateName: '聖誕樹7尺以上'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10064017',
                    CateID: 'EC_10064017',
                    CateName: '聖誕吊飾丨擺飾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10064021',
                    CateID: 'EC_10064021',
                    CateName: '聖誕禮物|其他'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001303',
                    CateID: 'EC_10001303',
                    CateName: '新年節慶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001304',
                    CateID: 'EC_10001304',
                    CateName: '造型玩偶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001302',
                    CateID: 'EC_10001302',
                    CateName: '聖誕佈置'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10001289',
                CateID: 'EC_10001289',
                CateName: '佈置美好 ‧ 妝點聖誕'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001313',
                    CateID: 'EC_10001313',
                    CateName: '單人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001314',
                    CateID: 'EC_10001314',
                    CateName: '雙人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001315',
                    CateID: 'EC_10001315',
                    CateName: '加大丨特大'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001028',
                    CateID: 'EC_10001028',
                    CateName: '床包被套組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000187',
                    CateID: 'EC_10000187',
                    CateName: '天絲丨木棉絲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000184',
                    CateID: 'EC_10000184',
                    CateName: '透氣純棉'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000186',
                    CateID: 'EC_10000186',
                    CateName: '木漿纖維'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000185',
                    CateID: 'EC_10000185',
                    CateName: '保暖法蘭絨'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000199',
                    CateID: 'EC_10000199',
                    CateName: '保潔墊丨保暖墊'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000018',
                CateID: 'EC_10000018',
                CateName: '床包被套'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000188',
                    CateID: 'EC_10000188',
                    CateName: '羽絨被丨纖維被'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000189',
                    CateID: 'EC_10000189',
                    CateName: '蠶絲被'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000192',
                    CateID: 'EC_10000192',
                    CateName: '羊毛被'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000190',
                    CateID: 'EC_10000190',
                    CateName: '長羔絨丨法蘭絨毯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000191',
                    CateID: 'EC_10000191',
                    CateName: '薄毯丨編織毯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000193',
                    CateID: 'EC_10000193',
                    CateName: '涼被丨四季被'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000019',
                CateID: 'EC_10000019',
                CateName: '被胎丨萬用毯'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000194',
                    CateID: 'EC_10000194',
                    CateName: '乳膠枕丨羽絨枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000195',
                    CateID: 'EC_10000195',
                    CateName: '特殊枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000196',
                    CateID: 'EC_10000196',
                    CateName: '記憶枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000197',
                    CateID: 'EC_10000197',
                    CateName: '化纖枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000198',
                    CateID: 'EC_10000198',
                    CateName: '枕套'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000020',
                CateID: 'EC_10000020',
                CateName: '枕頭丨枕套'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000207',
                    CateID: 'EC_10000207',
                    CateName: '兒童床包兩用被'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000208',
                    CateID: 'EC_10000208',
                    CateName: '兒童枕頭丨枕套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000209',
                    CateID: 'EC_10000209',
                    CateName: '兒童毯類'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000210',
                    CateID: 'EC_10000210',
                    CateName: '兒童睡袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/rootCategory/%E7%89%B9%E5%8A%9B%2B/%E5%AF%A2%E5%85%B7%E5%82%A2%E9%A3%BE/%E5%85%92%E7%AB%A5%E5%AF%A2%E5%85%B7/%E5%85%92%E7%AB%A5%E6%B6%BC%E8%A2%AB/c/EC_10001056',
                    CateID: 'EC_10001056',
                    CateName: '兒童涼被'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000022',
                CateID: 'EC_10000022',
                CateName: '兒童寢具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000204',
                    CateID: 'EC_10000204',
                    CateName: '冷凝墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000205',
                    CateID: 'EC_10000205',
                    CateName: '麻將蓆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000206',
                    CateID: 'EC_10000206',
                    CateName: '紙纖丨植草'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000021',
                CateID: 'EC_10000021',
                CateName: '涼感商品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000236',
                    CateID: 'EC_10000236',
                    CateName: '半腰窗簾丨窗紗'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000237',
                    CateID: 'EC_10000237',
                    CateName: '落地窗簾丨窗紗'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000239',
                    CateID: 'EC_10000239',
                    CateName: '窗簾桿類丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000240',
                    CateID: 'EC_10000240',
                    CateName: '捲簾丨羅馬簾丨百葉簾丨調光簾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000241',
                    CateID: 'EC_10000241',
                    CateName: '捲簾丨羅馬簾'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000027',
                CateID: 'EC_10000027',
                CateName: '窗簾'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001308',
                    CateID: 'EC_10001308',
                    CateName: '防蚊門簾丨門簾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10040001',
                    CateID: 'EC_10040001',
                    CateName: '風水簾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10040000',
                    CateID: 'EC_10040000',
                    CateName: '線簾丨珠簾'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10036033',
                CateID: 'EC_10036033',
                CateName: '門簾'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000243',
                    CateID: 'EC_10000243',
                    CateName: '抗UV丨隔熱窗貼'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000244',
                    CateID: 'EC_10000244',
                    CateName: '壁紙'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000245',
                    CateID: 'EC_10000245',
                    CateName: '廚房︱浴室壁貼'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000246',
                    CateID: 'EC_10000246',
                    CateName: '自黏貼布'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000247',
                    CateID: 'EC_10000247',
                    CateName: '童趣丨節慶壁貼'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000028',
                CateID: 'EC_10000028',
                CateName: '壁貼丨窗貼'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000233',
                    CateID: 'EC_10000233',
                    CateName: '靠墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000231',
                    CateID: 'EC_10000231',
                    CateName: '坐墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000229',
                    CateID: 'EC_10000229',
                    CateName: '頭枕丨頸枕'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000026',
                CateID: 'EC_10000026',
                CateName: '坐墊丨靠墊丨頸枕'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000227',
                    CateID: 'EC_10000227',
                    CateName: '抱枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000228',
                    CateID: 'EC_10000228',
                    CateName: '長抱枕丨造型抱枕'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000025',
                CateID: 'EC_10000025',
                CateName: '抱枕'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10037007',
                    CateID: 'EC_10037007',
                    CateName: '棉質踏墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10037006',
                    CateID: 'EC_10037006',
                    CateName: '超細纖維踏墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10037005',
                    CateID: 'EC_10037005',
                    CateName: '雪尼爾踏墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000211',
                    CateID: 'EC_10000211',
                    CateName: '記憶棉踏墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000212',
                    CateID: 'EC_10000212',
                    CateName: '珪藻土丨矽藻土踏墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000214',
                    CateID: 'EC_10000214',
                    CateName: 'PVC丨聚酯纖維踏墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000215',
                    CateID: 'EC_10000215',
                    CateName: 'EVA拼裝地墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000216',
                    CateID: 'EC_10000216',
                    CateName: '榻榻米'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10037004',
                CateID: 'EC_10037004',
                CateName: '室內踏墊'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000213',
                    CateID: 'EC_10000213',
                    CateName: '戶外踏墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10037002',
                    CateID: 'EC_10037002',
                    CateName: '椰纖丨亞麻踏墊'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10037001',
                CateID: 'EC_10037001',
                CateName: '戶外踏墊'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000222',
                    CateID: 'EC_10000222',
                    CateName: '素色地毯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000223',
                    CateID: 'EC_10000223',
                    CateName: '花色地毯'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000024',
                CateID: 'EC_10000024',
                CateName: '地毯'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000217',
                    CateID: 'EC_10000217',
                    CateName: '防滑丨EVA拖鞋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000218',
                    CateID: 'EC_10000218',
                    CateName: '織毛布拖鞋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000219',
                    CateID: 'EC_10000219',
                    CateName: '仿皮拖鞋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10000220',
                    CateID: 'EC_10000220',
                    CateName: '兒童拖鞋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10000023',
                CateID: 'EC_10000023',
                CateName: '拖鞋'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001290',
                    CateID: 'EC_10001290',
                    CateName: '人造花'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001291',
                    CateID: 'EC_10001291',
                    CateName: '花器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10036035',
                    CateID: 'EC_10036035',
                    CateName: '盆器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001294',
                    CateID: 'EC_10001294',
                    CateName: '裝飾小物丨鏡子'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10001286',
                CateID: 'EC_10001286',
                CateName: '裝飾花材'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001023',
                    CateID: 'EC_10001023',
                    CateName: '披肩圍巾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001307',
                    CateID: 'EC_10001307',
                    CateName: '沙發便利套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10001022',
                    CateID: 'EC_10001022',
                    CateName: '蚊帳'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001305',
                    CateID: 'EC_10001305',
                    CateName: '其他'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10001021',
                CateID: 'EC_10001021',
                CateName: '傢飾配件'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Bedding_Decoration/c/EC_10061072',
                    CateID: 'EC_10061072',
                    CateName: '壁飾丨壁畫'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001298',
                    CateID: 'EC_10001298',
                    CateName: '相框丨文件框'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001296',
                    CateID: 'EC_10001296',
                    CateName: '時鐘丨鬧鐘'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001297',
                    CateID: 'EC_10001297',
                    CateName: '壁鐘丨掛鐘'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Bedding_Decoration/c/EC_10036036',
                CateID: 'EC_10036036',
                CateName: '鐘丨框丨畫'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '居家日用',
                H2Heading: '天然清潔好幫手 ↘85折起',
                EndTime: '2018-12-31 11:59',
                LinkTarget: 'N',
                imagedetailsPk: 8796552853898,
                memo: '居家日用1218-3',
                pk: 8796552853897,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Housewares/c/EC_10001135'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-31 11:59',
                LinkTarget: 'N',
                imagedetailsPk: 8796552493450,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hb8/h42/9106117296158/9106117296158.jpg',
                memo: '0309_居家日用1',
                pk: 8796552493449,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h63/h0e/9106117230622/9106117230622.jpg',
                Queue: 1,
                Link: 'https://www.trplus.com.tw/TR_Housewares/c/EC_10000030'
              }
            ],
            CateUrl: '/TR_Housewares/c/EC_10000003',
            CateID: 'EC_10000003',
            CateName: '居家日用'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001457',
                    CateID: 'EC_10001457',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001581',
                    CateID: 'EC_10001581',
                    CateName: '本月TOP暢銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001652',
                    CateID: 'EC_10001652',
                    CateName: '新品上市搶鮮購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001656',
                    CateID: 'EC_10001656',
                    CateName: '4折起►洗沐品牌聯慶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001654',
                    CateID: 'EC_10001654',
                    CateName: '7折起►清潔達人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001657',
                    CateID: 'EC_10001657',
                    CateName: '5折起►易拖寶EasyMop'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001658',
                    CateID: 'EC_10001658',
                    CateName: '5折起►家事達人VICTORY'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001660',
                    CateID: 'EC_10001660',
                    CateName: '5折起►寵愛毛小孩'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001456',
                    CateID: 'EC_10001456',
                    CateName: '3折起►晾曬達人推薦'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001661',
                    CateID: 'EC_10001661',
                    CateName: '8折起►一匙靈X魔術靈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001668',
                    CateID: 'EC_10001668',
                    CateName: '399起►居家香氛大賞'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10001655',
                    CateID: 'EC_10001655',
                    CateName: '4折起►垃圾桶限時特賣'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Housewares/c/EC_10001079',
                CateID: 'EC_10001079',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10029001',
                    CateID: 'EC_10029001',
                    CateName: '曬衣用品►8折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10029002',
                    CateID: 'EC_10029002',
                    CateName: '獅王&一匙靈►88折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10029003',
                    CateID: 'EC_10029003',
                    CateName: '家用清潔►79折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Housewares/c/EC_10029004',
                    CateID: 'EC_10029004',
                    CateName: '晴天媽咪精選洗曬'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Housewares/c/EC_10029000',
                CateID: 'EC_10029000',
                CateName: '清潔洗曬︱加分秘訣'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000255',
                    CateID: 'EC_10000255',
                    CateName: '曬衣架丨鏈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000256',
                    CateID: 'EC_10000256',
                    CateName: '曬衣夾丨網'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000257',
                    CateID: 'EC_10000257',
                    CateName: '衣架丨褲架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000258',
                    CateID: 'EC_10000258',
                    CateName: '洗衣籃丨盆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000259',
                    CateID: 'EC_10000259',
                    CateName: '洗衣袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000260',
                    CateID: 'EC_10000260',
                    CateName: '燙衣板丨布'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000261',
                    CateID: 'EC_10000261',
                    CateName: '洗衣球丨刷丨板'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000030',
                CateID: 'EC_10000030',
                CateName: '洗曬用品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000248',
                    CateID: 'EC_10000248',
                    CateName: '洗衣精'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000249',
                    CateID: 'EC_10000249',
                    CateName: '洗衣粉丨皂'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000250',
                    CateID: 'EC_10000250',
                    CateName: '凝膠球丨果凍球'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000251',
                    CateID: 'EC_10000251',
                    CateName: '冷洗精丨柔軟精'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000252',
                    CateID: 'EC_10000252',
                    CateName: '去漬劑丨漂白水'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000253',
                    CateID: 'EC_10000253',
                    CateName: '烘衣紙丨香氛粒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000254',
                    CateID: 'EC_10000254',
                    CateName: '洗衣槽清潔劑'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000029',
                CateID: 'EC_10000029',
                CateName: '衣物清潔'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000262',
                    CateID: 'EC_10000262',
                    CateName: '防蚊驅蟲丨殺蟑滅鼠'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000263',
                    CateID: 'EC_10000263',
                    CateName: '抗菌消毒劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000264',
                    CateID: 'EC_10000264',
                    CateName: '洗碗精丨廚房清潔劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000265',
                    CateID: 'EC_10000265',
                    CateName: '地板丨專業清潔劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000266',
                    CateID: 'EC_10000266',
                    CateName: '浴廁丨水管清潔劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000267',
                    CateID: 'EC_10000267',
                    CateName: '傢俱保養劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000268',
                    CateID: 'EC_10000268',
                    CateName: '除濕盒丨防霉劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000269',
                    CateID: 'EC_10000269',
                    CateName: '除濕袋丨包'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000270',
                    CateID: 'EC_10000270',
                    CateName: '消臭去味丨芳香劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000271',
                    CateID: 'EC_10000271',
                    CateName: '冷氣清潔劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10001049',
                    CateID: 'EC_10001049',
                    CateName: '除丨防霉劑'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000031',
                CateID: 'EC_10000031',
                CateName: '清潔丨除蟲丨除濕丨芳香'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000325',
                    CateID: 'EC_10000325',
                    CateName: '成人牙刷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000324',
                    CateID: 'EC_10000324',
                    CateName: '兒童牙刷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000326',
                    CateID: 'EC_10000326',
                    CateName: '牙間刷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000327',
                    CateID: 'EC_10000327',
                    CateName: '漱口水'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000328',
                    CateID: 'EC_10000328',
                    CateName: '牙線丨棒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000329',
                    CateID: 'EC_10000329',
                    CateName: '敏感性牙膏'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000330',
                    CateID: 'EC_10000330',
                    CateName: '亮白牙膏'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000331',
                    CateID: 'EC_10000331',
                    CateName: '兒童牙膏'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000332',
                    CateID: 'EC_10000332',
                    CateName: '其他牙膏'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000333',
                    CateID: 'EC_10000333',
                    CateName: '牙膏牙刷組合'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000334',
                    CateID: 'EC_10000334',
                    CateName: '化妝水'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000335',
                    CateID: 'EC_10000335',
                    CateName: '粉刺調理'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000336',
                    CateID: 'EC_10000336',
                    CateName: '潔顏工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000337',
                    CateID: 'EC_10000337',
                    CateName: '臉部清潔'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000338',
                    CateID: 'EC_10000338',
                    CateName: '控油抗屑洗髮'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000339',
                    CateID: 'EC_10000339',
                    CateName: '修護滋潤洗髮'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000340',
                    CateID: 'EC_10000340',
                    CateName: '護色護髮丨潤絲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000341',
                    CateID: 'EC_10000341',
                    CateName: '染髮乳丨霜'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000342',
                    CateID: 'EC_10000342',
                    CateName: '乾洗髮丨造型品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000343',
                    CateID: 'EC_10000343',
                    CateName: '嬰幼兒洗沐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000344',
                    CateID: 'EC_10000344',
                    CateName: '沐浴乳丨皂'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000345',
                    CateID: 'EC_10000345',
                    CateName: '沐浴鹽丨入浴劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000346',
                    CateID: 'EC_10000346',
                    CateName: '潤膚乳丨按摩油'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000347',
                    CateID: 'EC_10000347',
                    CateName: '刮鬍水丨體香膏'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000348',
                    CateID: 'EC_10000348',
                    CateName: '手工皂丨沐浴皂'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000349',
                    CateID: 'EC_10000349',
                    CateName: '洗手乳'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000037',
                CateID: 'EC_10000037',
                CateName: '個人清潔'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000272',
                    CateID: 'EC_10000272',
                    CateName: '拖把丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000273',
                    CateID: 'EC_10000273',
                    CateName: '除塵紙丨濕拖巾丨隨手黏'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000274',
                    CateID: 'EC_10000274',
                    CateName: '掃把丨簸箕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000275',
                    CateID: 'EC_10000275',
                    CateName: '窗刷丨地板刷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000276',
                    CateID: 'EC_10000276',
                    CateName: '浴廁刷丨水管疏通'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000277',
                    CateID: 'EC_10000277',
                    CateName: '菜瓜布丨海棉'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000278',
                    CateID: 'EC_10000278',
                    CateName: '鍋刷丨杯刷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000279',
                    CateID: 'EC_10000279',
                    CateName: '抹布丨擦地鞋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000280',
                    CateID: 'EC_10000280',
                    CateName: '清潔手套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000281',
                    CateID: 'EC_10000281',
                    CateName: '過濾網丨濾水網'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000032',
                CateID: 'EC_10000032',
                CateName: '清潔工具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000285',
                    CateID: 'EC_10000285',
                    CateName: '抽取式衛生紙'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000286',
                    CateID: 'EC_10000286',
                    CateName: '餐巾紙'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000287',
                    CateID: 'EC_10000287',
                    CateName: '酒精擦丨濕紙巾'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000034',
                CateID: 'EC_10000034',
                CateName: '衛生紙丨濕紙巾'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000282',
                    CateID: 'EC_10000282',
                    CateName: '緩降丨踏式垃圾桶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000283',
                    CateID: 'EC_10000283',
                    CateName: '搖蓋丨掀蓋丨一般垃圾桶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000284',
                    CateID: 'EC_10000284',
                    CateName: '垃圾袋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000033',
                CateID: 'EC_10000033',
                CateName: '垃圾桶丨袋'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000358',
                    CateID: 'EC_10000358',
                    CateName: '足部丨美甲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000359',
                    CateID: 'EC_10000359',
                    CateName: '美顏工具丨美齒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000360',
                    CateID: 'EC_10000360',
                    CateName: '假睫毛丨配件小物'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000361',
                    CateID: 'EC_10000361',
                    CateName: '美容雜貨'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000362',
                    CateID: 'EC_10000362',
                    CateName: '潤膚乳液'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000363',
                    CateID: 'EC_10000363',
                    CateName: '手足保養'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000364',
                    CateID: 'EC_10000364',
                    CateName: '美體緊緻'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000365',
                    CateID: 'EC_10000365',
                    CateName: '防曬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10001057',
                    CateID: 'EC_10001057',
                    CateName: '美髮用品'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000039',
                CateID: 'EC_10000039',
                CateName: '美容用品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000366',
                    CateID: 'EC_10000366',
                    CateName: '造型蠟燭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000367',
                    CateID: 'EC_10000367',
                    CateName: '燭台'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000368',
                    CateID: 'EC_10000368',
                    CateName: '線香丨精油'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000369',
                    CateID: 'EC_10000369',
                    CateName: '水氧機丨香氛機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000370',
                    CateID: 'EC_10000370',
                    CateName: '馨香竹丨香氛袋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000040',
                CateID: 'EC_10000040',
                CateName: '香氛丨蠟燭'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000306',
                    CateID: 'EC_10000306',
                    CateName: '狗►外出用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000307',
                    CateID: 'EC_10000307',
                    CateName: '狗►清潔美容用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000308',
                    CateID: 'EC_10000308',
                    CateName: '狗►清潔消臭劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000309',
                    CateID: 'EC_10000309',
                    CateName: '狗►尿墊丨便盆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000310',
                    CateID: 'EC_10000310',
                    CateName: '狗►餵食餐具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000311',
                    CateID: 'EC_10000311',
                    CateName: '狗►狗窩丨床墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000312',
                    CateID: 'EC_10000312',
                    CateName: '狗►玩具訓練用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000313',
                    CateID: 'EC_10000313',
                    CateName: '狗►服飾配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000314',
                    CateID: 'EC_10000314',
                    CateName: '貓砂'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000315',
                    CateID: 'EC_10000315',
                    CateName: '貓►外出用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000316',
                    CateID: 'EC_10000316',
                    CateName: '貓►清潔美容用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000317',
                    CateID: 'EC_10000317',
                    CateName: '貓►清潔消臭劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000318',
                    CateID: 'EC_10000318',
                    CateName: '貓►便盆丨尿墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000319',
                    CateID: 'EC_10000319',
                    CateName: '貓►餵食餐具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000320',
                    CateID: 'EC_10000320',
                    CateName: '貓►貓窩丨床墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000321',
                    CateID: 'EC_10000321',
                    CateName: '貓►玩具訓練用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000322',
                    CateID: 'EC_10000322',
                    CateName: '貓►服飾配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000323',
                    CateID: 'EC_10000323',
                    CateName: '其他小動物'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000036',
                CateID: 'EC_10000036',
                CateName: '寵物用品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000288',
                    CateID: 'EC_10000288',
                    CateName: '化毛膏'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000289',
                    CateID: 'EC_10000289',
                    CateName: '狗►飼料丨乾糧-幼犬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000290',
                    CateID: 'EC_10000290',
                    CateName: '狗►飼料丨乾糧-成犬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000291',
                    CateID: 'EC_10000291',
                    CateName: '狗►飼料丨乾糧-老犬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000292',
                    CateID: 'EC_10000292',
                    CateName: '狗►飼料丨乾糧-全犬種'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000293',
                    CateID: 'EC_10000293',
                    CateName: '狗►罐頭丨餐包'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000294',
                    CateID: 'EC_10000294',
                    CateName: '狗►零食'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000295',
                    CateID: 'EC_10000295',
                    CateName: '狗►營養保健'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000296',
                    CateID: 'EC_10000296',
                    CateName: '狗►餵食用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000297',
                    CateID: 'EC_10000297',
                    CateName: '貓►飼料丨乾糧-幼貓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000298',
                    CateID: 'EC_10000298',
                    CateName: '貓►飼料丨乾糧-成貓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000299',
                    CateID: 'EC_10000299',
                    CateName: '貓►飼料丨乾糧-老貓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000300',
                    CateID: 'EC_10000300',
                    CateName: '貓►飼料丨乾糧-全貓種'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000301',
                    CateID: 'EC_10000301',
                    CateName: '貓►罐頭丨餐包'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000302',
                    CateID: 'EC_10000302',
                    CateName: '貓►零食'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000303',
                    CateID: 'EC_10000303',
                    CateName: '貓►營養保健'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000304',
                    CateID: 'EC_10000304',
                    CateName: '貓►餵食用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000305',
                    CateID: 'EC_10000305',
                    CateName: '其他小動物'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000035',
                CateID: 'EC_10000035',
                CateName: '寵物食品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000395',
                    CateID: 'EC_10000395',
                    CateName: '菜籃丨購物車丨袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10001026',
                    CateID: 'EC_10001026',
                    CateName: '婦幼用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000393',
                    CateID: 'EC_10000393',
                    CateName: '雨具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000394',
                    CateID: 'EC_10000394',
                    CateName: '保暖品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10001044',
                    CateID: 'EC_10001044',
                    CateName: '萬用貼布丨膏丨霜'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000391',
                    CateID: 'EC_10000391',
                    CateName: '文具丨玩具用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000392',
                    CateID: 'EC_10000392',
                    CateName: '桌上鏡'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000396',
                    CateID: 'EC_10000396',
                    CateName: '整理帶丨扣帶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10000397',
                    CateID: 'EC_10000397',
                    CateName: '口罩'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Housewares/c/EC_10001025',
                    CateID: 'EC_10001025',
                    CateName: '襪著丨鞋材'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Housewares/c/EC_10000043',
                CateID: 'EC_10000043',
                CateName: '居家雜貨'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '餐桌上的幸福時光',
                H2Heading: '用心料理專屬美味 ↘8折起',
                EndTime: '2018-12-31 09:17',
                LinkTarget: 'N',
                imagedetailsPk: 8797371660682,
                memo: '1219_餐廚用品1',
                pk: 8797371660681,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/edm/trplus/SP_Kitchen'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2019-01-31 00:00',
                LinkTarget: 'N',
                imagedetailsPk: 8798453758346,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h29/hf0/9087249547294/9087249547294.jpg',
                memo: '餐廚大賞',
                pk: 8798453758345,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hf4/hce/9087249481758/9087249481758.jpg',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/edm/trplus/SP_Kitchen'
              },
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2019-01-31 00:00',
                LinkTarget: 'N',
                imagedetailsPk: 8797799774602,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hc2/hfb/9079454924830/9079454924830.jpg',
                memo: '餐櫥_1023',
                pk: 8797799905673,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h30/h3e/9079454859294/9079454859294.jpg',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_KitchenDinnerware/c/EC_10001576'
              },
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-31 02:42',
                LinkTarget: 'N',
                imagedetailsPk: 8797338433930,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h4c/hf1/8876050350110.jpg',
                memo: '1219_餐廚用品',
                pk: 8797338433929,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h85/h82/8876050284574.jpg',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_KitchenDinnerware/c/EC_10000004'
              }
            ],
            CateUrl: '/TR_KitchenDinnerware/c/EC_10000004',
            CateID: 'EC_10000004',
            CateName: '餐廚用品'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001438',
                    CateID: 'EC_10001438',
                    CateName: '門店TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001439',
                    CateID: 'EC_10001439',
                    CateName: '新品上市搶鮮購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001437',
                    CateID: 'EC_10001437',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001629',
                    CateID: 'EC_10001629',
                    CateName: '149起►日本精選餐具系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001140',
                    CateID: 'EC_10001140',
                    CateName: '199起►迪士尼餐具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001436',
                    CateID: 'EC_10001436',
                    CateName: '999►亞莫鑄鐵琺瑯湯鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001365',
                    CateID: 'EC_10001365',
                    CateName: '$399起►保溫杯品牌賞'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001366',
                    CateID: 'EC_10001366',
                    CateName: '$490起►熱銷刀具推薦'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001367',
                    CateID: 'EC_10001367',
                    CateName: '$699起►德國Turk鐵鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001368',
                    CateID: 'EC_10001368',
                    CateName: '2折起►Lodge鑄鐵鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001369',
                    CateID: 'EC_10001369',
                    CateName: '2折起►WMF年終特賣'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001370',
                    CateID: 'EC_10001370',
                    CateName: '4折起►精選人氣餐具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001371',
                    CateID: 'EC_10001371',
                    CateName: '4折起►咖啡午茶時光'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001372',
                    CateID: 'EC_10001372',
                    CateName: '45折起►LC│Staub鑄鐵鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001440',
                    CateID: 'EC_10001440',
                    CateName: '5折起►牛頭牌鍋具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001441',
                    CateID: 'EC_10001441',
                    CateName: '5折起►日本人氣鍋具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001442',
                    CateID: 'EC_10001442',
                    CateName: '5折起►仙德曼精選餐廚'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001373',
                    CateID: 'EC_10001373',
                    CateName: '5折起►純色餐具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001434',
                    CateID: 'EC_10001434',
                    CateName: '56折►防漏油壺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001443',
                    CateID: 'EC_10001443',
                    CateName: '6折起►法國De Buyer鍋具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001576',
                    CateID: 'EC_10001576',
                    CateName: '8折起►HOLA品牌鍋具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001364',
                    CateID: 'EC_10001364',
                    CateName: '滿額贈鍋鏟►特福不沾鍋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10001083',
                CateID: 'EC_10001083',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060019',
                    CateID: 'EC_10060019',
                    CateName: '茶組配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060017',
                    CateID: 'EC_10060017',
                    CateName: '質感食器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060018',
                    CateID: 'EC_10060018',
                    CateName: '刀叉筷匙'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060015',
                    CateID: 'EC_10060015',
                    CateName: '實用鍋具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060016',
                    CateID: 'EC_10060016',
                    CateName: '餐廚配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060020',
                    CateID: 'EC_10060020',
                    CateName: '保溫瓶壺'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10060014',
                CateID: 'EC_10060014',
                CateName: '年度熱銷榜'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10025038',
                    CateID: 'EC_10025038',
                    CateName: '不沾鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000398',
                    CateID: 'EC_10000398',
                    CateName: '平底鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000399',
                    CateID: 'EC_10000399',
                    CateName: '油炸丨煎烤鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000400',
                    CateID: 'EC_10000400',
                    CateName: '炒鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000401',
                    CateID: 'EC_10000401',
                    CateName: '湯鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000402',
                    CateID: 'EC_10000402',
                    CateName: '蒸煮丨雪平鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000403',
                    CateID: 'EC_10000403',
                    CateName: '鑄鐵鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000404',
                    CateID: 'EC_10000404',
                    CateName: '琺瑯鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000405',
                    CateID: 'EC_10000405',
                    CateName: '不鏽鋼鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000406',
                    CateID: 'EC_10000406',
                    CateName: '純鐵丨碳鋼鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000407',
                    CateID: 'EC_10000407',
                    CateName: '燜燒丨壓力丨節能鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000408',
                    CateID: 'EC_10000408',
                    CateName: '陶瓷丨塔吉丨玻璃鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000409',
                    CateID: 'EC_10000409',
                    CateName: '超值鍋具組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000410',
                    CateID: 'EC_10000410',
                    CateName: '鍋蓋丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000044',
                CateID: 'EC_10000044',
                CateName: '鍋具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000411',
                    CateID: 'EC_10000411',
                    CateName: '鋼刀丨料理刀'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000412',
                    CateID: 'EC_10000412',
                    CateName: '陶瓷刀具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000413',
                    CateID: 'EC_10000413',
                    CateName: '削皮刀丨刨絲刀'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000414',
                    CateID: 'EC_10000414',
                    CateName: '料理剪丨廚房剪'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000415',
                    CateID: 'EC_10000415',
                    CateName: '其他刀具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000416',
                    CateID: 'EC_10000416',
                    CateName: '竹木砧板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000417',
                    CateID: 'EC_10000417',
                    CateName: '塑料砧板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000418',
                    CateID: 'EC_10000418',
                    CateName: '刀架丨砧板架丨磨刀器'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000045',
                CateID: 'EC_10000045',
                CateName: '刀具砧板'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000419',
                    CateID: 'EC_10000419',
                    CateName: '調味罐丨研磨罐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000421',
                    CateID: 'EC_10000421',
                    CateName: '搗碎丨刨絲器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000423',
                    CateID: 'EC_10000423',
                    CateName: '烘培用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000420',
                    CateID: 'EC_10000420',
                    CateName: '烤盤丨模具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000422',
                    CateID: 'EC_10000422',
                    CateName: '料理丨調理秤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001019',
                    CateID: 'EC_10001019',
                    CateName: '計時器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001064',
                    CateID: 'EC_10001064',
                    CateName: '榨汁器'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000046',
                CateID: 'EC_10000046',
                CateName: '料理工具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000424',
                    CateID: 'EC_10000424',
                    CateName: '桌巾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000425',
                    CateID: 'EC_10000425',
                    CateName: '椅腳套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000426',
                    CateID: 'EC_10000426',
                    CateName: '圍裙丨隔熱墊丨隔熱手套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001061',
                    CateID: 'EC_10001061',
                    CateName: '品酒用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001062',
                    CateID: 'EC_10001062',
                    CateName: '製冰用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001039',
                    CateID: 'EC_10001039',
                    CateName: '瀝水丨洗米器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000427',
                    CateID: 'EC_10000427',
                    CateName: '儲米器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000428',
                    CateID: 'EC_10000428',
                    CateName: '封口機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001065',
                    CateID: 'EC_10001065',
                    CateName: '濾網丨濾紙'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000429',
                    CateID: 'EC_10000429',
                    CateName: '餐具配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000047',
                CateID: 'EC_10000047',
                CateName: '餐廚配件'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000436',
                    CateID: 'EC_10000436',
                    CateName: '保鮮膜丨封口器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000434',
                    CateID: 'EC_10000434',
                    CateName: '真空密封盒罐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000432',
                    CateID: 'EC_10000432',
                    CateName: '不鏽鋼保鮮盒罐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000431',
                    CateID: 'EC_10000431',
                    CateName: '玻璃保鮮盒罐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000430',
                    CateID: 'EC_10000430',
                    CateName: '塑料保鮮盒罐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000433',
                    CateID: 'EC_10000433',
                    CateName: '陶瓷丨異材質保鮮盒罐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000435',
                    CateID: 'EC_10000435',
                    CateName: '保溫丨保冰袋丨籃'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000048',
                CateID: 'EC_10000048',
                CateName: '保鮮丨密封'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000437',
                    CateID: 'EC_10000437',
                    CateName: '餐碗'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000438',
                    CateID: 'EC_10000438',
                    CateName: '餐盤丨碟皿'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000440',
                    CateID: 'EC_10000440',
                    CateName: '便當盒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000441',
                    CateID: 'EC_10000441',
                    CateName: '托盤丨沙拉缽'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000439',
                    CateID: 'EC_10000439',
                    CateName: '餐具組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000442',
                    CateID: 'EC_10000442',
                    CateName: '餐刀｜餐叉'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000443',
                    CateID: 'EC_10000443',
                    CateName: '筷子'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000444',
                    CateID: 'EC_10000444',
                    CateName: '勺匙'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000445',
                    CateID: 'EC_10000445',
                    CateName: '環保餐具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000446',
                    CateID: 'EC_10000446',
                    CateName: '兒童餐具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000049',
                CateID: 'EC_10000049',
                CateName: '碗盤筷匙'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000450',
                    CateID: 'EC_10000450',
                    CateName: '隨手杯丨馬克杯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000453',
                    CateID: 'EC_10000453',
                    CateName: '不鏽鋼杯丨瓶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000451',
                    CateID: 'EC_10000451',
                    CateName: '燜燒杯丨罐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000449',
                    CateID: 'EC_10000449',
                    CateName: '保溫瓶丨保溫杯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000448',
                    CateID: 'EC_10000448',
                    CateName: '玻璃杯丨水晶杯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000447',
                    CateID: 'EC_10000447',
                    CateName: '酒瓶丨酒杯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000452',
                    CateID: 'EC_10000452',
                    CateName: '冷水壺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000455',
                    CateID: 'EC_10000455',
                    CateName: '杯具組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000456',
                    CateID: 'EC_10000456',
                    CateName: '杯蓋丨杯墊丨吸管'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000454',
                    CateID: 'EC_10000454',
                    CateName: '兒童用'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000050',
                CateID: 'EC_10000050',
                CateName: '杯瓶壺'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000457',
                    CateID: 'EC_10000457',
                    CateName: '咖啡杯丨壺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000458',
                    CateID: 'EC_10000458',
                    CateName: '茶杯丨茶壺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000459',
                    CateID: 'EC_10000459',
                    CateName: '煮水壺丨琴音壺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000460',
                    CateID: 'EC_10000460',
                    CateName: '午茶茶具組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10000461',
                    CateID: 'EC_10000461',
                    CateName: '午茶配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10000051',
                CateID: 'EC_10000051',
                CateName: '咖啡用具丨茶具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060013',
                    CateID: 'EC_10060013',
                    CateName: '316複合不鏽鋼鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060012',
                    CateID: 'EC_10060012',
                    CateName: '輕量不沾鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10060011',
                    CateID: 'EC_10060011',
                    CateName: 'HOLA琺瑯鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001535',
                    CateID: 'EC_10001535',
                    CateName: 'Amour亞莫'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001539',
                    CateID: 'EC_10001539',
                    CateName: 'LASSAN蘿莎'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001541',
                    CateID: 'EC_10001541',
                    CateName: 'STONE史東'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001536',
                    CateID: 'EC_10001536',
                    CateName: 'CLASSIC經典'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001534',
                    CateID: 'EC_10001534',
                    CateName: 'ARON亞倫'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10001540',
                    CateID: 'EC_10001540',
                    CateName: 'MASTER大廚'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032030',
                    CateID: 'EC_10032030',
                    CateName: '法國畢耶deBuyer'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032027',
                    CateID: 'EC_10032027',
                    CateName: '法國特福Tefal'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032028',
                    CateID: 'EC_10032028',
                    CateName: '法國LeCreuset'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032029',
                    CateID: 'EC_10032029',
                    CateName: '法國Staub'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032026',
                    CateID: 'EC_10032026',
                    CateName: '德國寶迪Berndes'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10043014',
                    CateID: 'EC_10043014',
                    CateName: '法國畢昂Berard'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10043012',
                    CateID: 'EC_10043012',
                    CateName: '牛頭牌Buffalo'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10043013',
                    CateID: 'EC_10043013',
                    CateName: '法國獵人Chasseur'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10001533',
                CateID: 'EC_10001533',
                CateName: '品牌鍋具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032033',
                    CateID: 'EC_10032033',
                    CateName: '義大利品牌RCR'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032034',
                    CateID: 'EC_10032034',
                    CateName: '日本HARIO'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032035',
                    CateID: 'EC_10032035',
                    CateName: '泰國品牌Ocean'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032036',
                    CateID: 'EC_10032036',
                    CateName: 'JosephJoseph'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032037',
                    CateID: 'EC_10032037',
                    CateName: 'OXO'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10032032',
                CateID: 'EC_10032032',
                CateName: '品牌餐具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032015',
                    CateID: 'EC_10032015',
                    CateName: '超值鍋具組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032017',
                    CateID: 'EC_10032017',
                    CateName: '炒鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032016',
                    CateID: 'EC_10032016',
                    CateName: '平底鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032020',
                    CateID: 'EC_10032020',
                    CateName: '刀具配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032019',
                    CateID: 'EC_10032019',
                    CateName: '保鮮盒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032018',
                    CateID: 'EC_10032018',
                    CateName: '湯鍋丨燉鍋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10032014',
                CateID: 'EC_10032014',
                CateName: '法國特福Tefal'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032025',
                    CateID: 'EC_10032025',
                    CateName: '餐廚配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032024',
                    CateID: 'EC_10032024',
                    CateName: '餐具丨杯瓶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032023',
                    CateID: 'EC_10032023',
                    CateName: '烤盤丨模具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_KitchenDinnerware/c/EC_10032022',
                    CateID: 'EC_10032022',
                    CateName: '鑄鐵鍋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_KitchenDinnerware/c/EC_10032021',
                CateID: 'EC_10032021',
                CateName: '法國LC｜Staub'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '食在動人最對味',
                H2Heading: '幸福美味好享受 ↘75折起',
                EndTime: '2018-12-31 03:08',
                LinkTarget: 'N',
                imagedetailsPk: 8797403871626,
                memo: 'C2-美食飲品',
                pk: 8797403871625,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Gourmet/c/EC_10000005'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-31 03:08',
                LinkTarget: 'N',
                imagedetailsPk: 8797176658314,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h57/h20/9106142724126/9106142724126.jpg',
                memo: '美食飲品-圖檔',
                pk: 8797176658313,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h26/h6e/9106142658590/9106142658590.jpg',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Gourmet/c/EC_10000052'
              }
            ],
            CateUrl: '/TR_Gourmet/c/EC_10000005',
            CateID: 'EC_10000005',
            CateName: '美食飲品'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Gourmet/c/EC_10001376',
                    CateID: 'EC_10001376',
                    CateName: '門店TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Gourmet/c/EC_10001377',
                    CateID: 'EC_10001377',
                    CateName: '新品上市搶鮮購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Gourmet/c/EC_10001375',
                    CateID: 'EC_10001375',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Gourmet/c/EC_10001429',
                    CateID: 'EC_10001429',
                    CateName: '精選美食禮盒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Gourmet/c/EC_10001394',
                    CateID: 'EC_10001394',
                    CateName: '熱銷日韓異國美食'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Gourmet/c/EC_10001578',
                    CateID: 'EC_10001578',
                    CateName: '暖胃美食好吃推薦'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Gourmet/c/EC_10001374',
                    CateID: 'EC_10001374',
                    CateName: '7折起►華陀品項下殺'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Gourmet/c/EC_10001087',
                CateID: 'EC_10001087',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000462',
                    CateID: 'EC_10000462',
                    CateName: '醬蔭油丨魚露'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000463',
                    CateID: 'EC_10000463',
                    CateName: '料理油丨調味油'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000464',
                    CateID: 'EC_10000464',
                    CateName: '胡麻醬丨咖哩塊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000466',
                    CateID: 'EC_10000466',
                    CateName: '沙拉醬丨芥茉醬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000467',
                    CateID: 'EC_10000467',
                    CateName: '辣椒醬丨豆瓣醬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000468',
                    CateID: 'EC_10000468',
                    CateName: '燒烤醬丨拌炒醬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000469',
                    CateID: 'EC_10000469',
                    CateName: '醃漬醬菜丨醋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000470',
                    CateID: 'EC_10000470',
                    CateName: '椒鹽香料丨香鬆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000471',
                    CateID: 'EC_10000471',
                    CateName: '濃湯丨湯底'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000472',
                    CateID: 'EC_10000472',
                    CateName: '果醬丨抹醬'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000473',
                    CateID: 'EC_10000473',
                    CateName: '麵條丨燉飯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000474',
                    CateID: 'EC_10000474',
                    CateName: '義大利麵'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000475',
                    CateID: 'EC_10000475',
                    CateName: '烘焙粉丨南北貨'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Gourmet/c/EC_10000052',
                CateID: 'EC_10000052',
                CateName: '食材調料'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000476',
                    CateID: 'EC_10000476',
                    CateName: '果汁丨醋飲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000477',
                    CateID: 'EC_10000477',
                    CateName: '咖啡丨沖泡飲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000478',
                    CateID: 'EC_10000478',
                    CateName: '茶飲丨豆漿堅果飲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000479',
                    CateID: 'EC_10000479',
                    CateName: '水丨氣泡飲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000480',
                    CateID: 'EC_10000480',
                    CateName: '茶丨花果茶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000481',
                    CateID: 'EC_10000481',
                    CateName: '穀粉丨麥片'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Gourmet/c/EC_10000053',
                CateID: 'EC_10000053',
                CateName: '沖泡飲品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000482',
                    CateID: 'EC_10000482',
                    CateName: '堅果丨蔬果乾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000483',
                    CateID: 'EC_10000483',
                    CateName: '糖果丨巧克力'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000484',
                    CateID: 'EC_10000484',
                    CateName: '餅乾丨爆米花'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000485',
                    CateID: 'EC_10000485',
                    CateName: '肉乾丨零嘴'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000486',
                    CateID: 'EC_10000486',
                    CateName: '果凍丨優格'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Gourmet/c/EC_10000054',
                CateID: 'EC_10000054',
                CateName: '零食點心'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000487',
                    CateID: 'EC_10000487',
                    CateName: '雞精'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000488',
                    CateID: 'EC_10000488',
                    CateName: '人蔘飲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000489',
                    CateID: 'EC_10000489',
                    CateName: '燕窩丨銀耳'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000490',
                    CateID: 'EC_10000490',
                    CateName: '葡萄糖胺飲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000491',
                    CateID: 'EC_10000491',
                    CateName: '精力元氣飲'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000492',
                    CateID: 'EC_10000492',
                    CateName: '纖素粉丨酵素液'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000493',
                    CateID: 'EC_10000493',
                    CateName: '膠原丨珍珠粉'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000494',
                    CateID: 'EC_10000494',
                    CateName: '葉黃素丨芝麻碇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000495',
                    CateID: 'EC_10000495',
                    CateName: '魚油丨紅藻鈣'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000496',
                    CateID: 'EC_10000496',
                    CateName: '納豆紅麴'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Gourmet/c/EC_10000497',
                    CateID: 'EC_10000497',
                    CateName: '其他膠囊粉錠'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Gourmet/c/EC_10000055',
                CateID: 'EC_10000055',
                CateName: '保健食品'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '冬日幸福嚴選',
                H2Heading: '電暖器丨電毯 暖心價↘6折起',
                EndTime: '2020-01-02 00:00',
                LinkTarget: 'N',
                imagedetailsPk: 8798486231434,
                memo: '暖冬家電',
                pk: 8798486231433,
                H3Heading: '',
                Queue: 1,
                Link: 'https://www.trplus.com.tw/TR_Appliance/c/EC_10000075'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2021-01-04 11:08',
                LinkTarget: 'N',
                imagedetailsPk: 8799567837578,
                MobileImage: '',
                'Alt': '暖冬家電',
                memo: '暖冬家電',
                pk: 8799567837577,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h5a/h4b/9105387159582/9105387159582.jpg',
                Queue: 1,
                Link: 'https://www.trplus.com.tw/TR_Appliance/c/EC_10000075'
              }
            ],
            CateUrl: '/TR_Appliance/c/EC_10000007',
            CateID: 'EC_10000007',
            CateName: '家電淨水'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001152',
                    CateID: 'EC_10001152',
                    CateName: '新品上市NEW'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001357',
                    CateID: 'EC_10001357',
                    CateName: '門店TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001358',
                    CateID: 'EC_10001358',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001684',
                    CateID: 'EC_10001684',
                    CateName: '限時7折起►Dyson'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001451',
                    CateID: 'EC_10001451',
                    CateName: '雙12限定破盤►小家電'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10027144',
                    CateID: 'EC_10027144',
                    CateName: 'TOP精選 ►除濕天王│防霉天后'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10028001',
                    CateID: 'EC_10028001',
                    CateName: '相對溼度 ►乾衣│烘被│電毯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10028000',
                    CateID: 'EC_10028000',
                    CateName: '舒適溫度 ►電暖↘69折起'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001452',
                    CateID: 'EC_10001452',
                    CateName: '強檔下殺►冰箱│洗衣機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001453',
                    CateID: 'EC_10001453',
                    CateName: '本月強檔特賣►LG驚喜購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001677',
                    CateID: 'EC_10001677',
                    CateName: '迎冬送舊►聲寶全面↘87折'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001678',
                    CateID: 'EC_10001678',
                    CateName: '現買現折►三菱冷暖│冰箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001679',
                    CateID: 'EC_10001679',
                    CateName: '現買現折►日立冷暖│除濕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001680',
                    CateID: 'EC_10001680',
                    CateName: '現折兩千►大金變頻冷暖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001681',
                    CateID: 'EC_10001681',
                    CateName: '現折回函再送►國際冷暖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001683',
                    CateID: 'EC_10001683',
                    CateName: '本月強檔特賣►三洋好禮送'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10027143',
                    CateID: 'EC_10027143',
                    CateName: '現買現折►東元空調'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Appliance/c/EC_10001095',
                CateID: 'EC_10001095',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10032124',
                    CateID: 'EC_10032124',
                    CateName: '家中處處暖烘烘'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001484',
                    CateID: 'EC_10001484',
                    CateName: '空氣清新好乾淨'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001483',
                    CateID: 'EC_10001483',
                    CateName: '住家不再溼答答'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001486',
                    CateID: 'EC_10001486',
                    CateName: '居家清潔好方便'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10032123',
                    CateID: 'EC_10032123',
                    CateName: '輕鬆開伙吃熱食'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001482',
                    CateID: 'EC_10001482',
                    CateName: '天冷來杯熱飲吧'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10001485',
                    CateID: 'EC_10001485',
                    CateName: '溫熱暖呼按摩去'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Appliance/c/EC_10032152',
                    CateID: 'EC_10032152',
                    CateName: '熱風吹彿真溫暖'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Appliance/c/EC_10001481',
                CateID: 'EC_10001481',
                CateName: '【秋冬暖心家電好物】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000618',
                    CateID: 'EC_10000618',
                    CateName: '葉片式暖器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000619',
                    CateID: 'EC_10000619',
                    CateName: '陶瓷暖器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000620',
                    CateID: 'EC_10000620',
                    CateName: '碳鹵素電暖器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000621',
                    CateID: 'EC_10000621',
                    CateName: '煤油暖爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000622',
                    CateID: 'EC_10000622',
                    CateName: '即熱式電膜'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000623',
                    CateID: 'EC_10000623',
                    CateName: '浴室兩用'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001007',
                    CateID: 'EC_10001007',
                    CateName: '多功能電暖器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000624',
                    CateID: 'EC_10000624',
                    CateName: '電毯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000625',
                    CateID: 'EC_10000625',
                    CateName: '烘被丨烘鞋機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000626',
                    CateID: 'EC_10000626',
                    CateName: '暖手丨暖足丨懷爐'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000075',
                CateID: 'EC_10000075',
                CateName: '電暖器丨電毯'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000613',
                    CateID: 'EC_10000613',
                    CateName: '空氣清淨機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000614',
                    CateID: 'EC_10000614',
                    CateName: '除濕機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000615',
                    CateID: 'EC_10000615',
                    CateName: '清淨除溼兩用'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000616',
                    CateID: 'EC_10000616',
                    CateName: '防潮箱丨防潮棒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000617',
                    CateID: 'EC_10000617',
                    CateName: '濾網丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000074',
                CateID: 'EC_10000074',
                CateName: '清淨丨除濕'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000606',
                    CateID: 'EC_10000606',
                    CateName: '有線式'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000607',
                    CateID: 'EC_10000607',
                    CateName: '無線式'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000610',
                    CateID: 'EC_10000610',
                    CateName: '除塵蟎機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000612',
                    CateID: 'EC_10000612',
                    CateName: '掃地機器人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000608',
                    CateID: 'EC_10000608',
                    CateName: '蒸氣拖把'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000609',
                    CateID: 'EC_10000609',
                    CateName: '乾濕兩用'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000611',
                    CateID: 'EC_10000611',
                    CateName: '耗材丨配件丨電池'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000073',
                CateID: 'EC_10000073',
                CateName: '吸塵器'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000684',
                    CateID: 'EC_10000684',
                    CateName: '快煮壺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000685',
                    CateID: 'EC_10000685',
                    CateName: '熱水瓶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000687',
                    CateID: 'EC_10000687',
                    CateName: '冰溫熱開飲機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000686',
                    CateID: 'EC_10000686',
                    CateName: '氣泡水機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000688',
                    CateID: 'EC_10000688',
                    CateName: '廚上型淨水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000689',
                    CateID: 'EC_10000689',
                    CateName: '廚下型淨水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000692',
                    CateID: 'EC_10000692',
                    CateName: '全戶式淨水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000691',
                    CateID: 'EC_10000691',
                    CateName: 'RO逆滲透淨水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000690',
                    CateID: 'EC_10000690',
                    CateName: '前置系統│軟水系統'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000693',
                    CateID: 'EC_10000693',
                    CateName: '水龍頭式│沐浴用淨水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000694',
                    CateID: 'EC_10000694',
                    CateName: '紫外線│電解淨水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001047',
                    CateID: 'EC_10001047',
                    CateName: '陶瓷濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000705',
                    CateID: 'EC_10000705',
                    CateName: '淨水飲水機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000702',
                    CateID: 'EC_10000702',
                    CateName: '沐浴式濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001046',
                    CateID: 'EC_10001046',
                    CateName: '洗滌用濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000701',
                    CateID: 'EC_10000701',
                    CateName: '龍頭式濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001050',
                    CateID: 'EC_10001050',
                    CateName: '淨水設備配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000081',
                CateID: 'EC_10000081',
                CateName: '淨水丨飲水設備'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000695',
                    CateID: 'EC_10000695',
                    CateName: '除雜質濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000696',
                    CateID: 'EC_10000696',
                    CateName: '除氯濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000697',
                    CateID: 'EC_10000697',
                    CateName: '除垢濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000698',
                    CateID: 'EC_10000698',
                    CateName: '除鉛濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001048',
                    CateID: 'EC_10001048',
                    CateName: 'RO逆滲透膜'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000699',
                    CateID: 'EC_10000699',
                    CateName: '套裝丨組合式濾芯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000700',
                    CateID: 'EC_10000700',
                    CateName: '除菌濾芯'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10035000',
                CateID: 'EC_10035000',
                CateName: '淨水丨飲水濾芯'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000706',
                    CateID: 'EC_10000706',
                    CateName: '濾水壺│濾水瓶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000707',
                    CateID: 'EC_10000707',
                    CateName: '濾水瓶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000708',
                    CateID: 'EC_10000708',
                    CateName: '濾水壺│濾水瓶濾芯'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000082',
                CateID: 'EC_10000082',
                CateName: '濾水壺瓶'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000710',
                    CateID: 'EC_10000710',
                    CateName: '冰箱-130L以下'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001030',
                    CateID: 'EC_10001030',
                    CateName: '冰箱-131L~250L'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000711',
                    CateID: 'EC_10000711',
                    CateName: '冰箱-251L~400L'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000712',
                    CateID: 'EC_10000712',
                    CateName: '冰箱-401L~600L'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000713',
                    CateID: 'EC_10000713',
                    CateName: '冰箱-601L以上'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000714',
                    CateID: 'EC_10000714',
                    CateName: '冷凍丨冷藏櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000715',
                    CateID: 'EC_10000715',
                    CateName: '儲酒櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000716',
                    CateID: 'EC_10000716',
                    CateName: '直立式洗衣機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000717',
                    CateID: 'EC_10000717',
                    CateName: '滾筒式洗衣機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000718',
                    CateID: 'EC_10000718',
                    CateName: '乾衣機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000719',
                    CateID: 'EC_10000719',
                    CateName: '脫水機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000720',
                    CateID: 'EC_10000720',
                    CateName: '洗衣機濾網丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000721',
                    CateID: 'EC_10000721',
                    CateName: '液晶電視-32吋以下'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000722',
                    CateID: 'EC_10000722',
                    CateName: '液晶電視-37吋~43吋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000723',
                    CateID: 'EC_10000723',
                    CateName: '液晶電視-46吋~50吋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000724',
                    CateID: 'EC_10000724',
                    CateName: '液晶電視-52吋~58吋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000725',
                    CateID: 'EC_10000725',
                    CateName: '液晶電視-60吋以上'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000727',
                    CateID: 'EC_10000727',
                    CateName: '電視壁掛架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000728',
                    CateID: 'EC_10000728',
                    CateName: '液晶螢幕護目鏡'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000083',
                CateID: 'EC_10000083',
                CateName: '冰箱丨洗衣機丨電視'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000627',
                    CateID: 'EC_10000627',
                    CateName: '烤箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000628',
                    CateID: 'EC_10000628',
                    CateName: '崁入式烤箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000629',
                    CateID: 'EC_10000629',
                    CateName: '微波爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000630',
                    CateID: 'EC_10000630',
                    CateName: '水波爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000631',
                    CateID: 'EC_10000631',
                    CateName: '電磁爐丨黑晶爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000632',
                    CateID: 'EC_10000632',
                    CateName: '點心機丨烤麵包機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000633',
                    CateID: 'EC_10000633',
                    CateName: '蒸煮美食鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000635',
                    CateID: 'EC_10000635',
                    CateName: '電鍋丨電子鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001035',
                    CateID: 'EC_10001035',
                    CateName: '多功能萬用丨壓力鍋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000634',
                    CateID: 'EC_10000634',
                    CateName: '煎藥壺'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000640',
                    CateID: 'EC_10000640',
                    CateName: '隨行果汁機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000641',
                    CateID: 'EC_10000641',
                    CateName: '豆漿機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000642',
                    CateID: 'EC_10000642',
                    CateName: '攪拌棒丨調理機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000643',
                    CateID: 'EC_10000643',
                    CateName: '風乾機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000644',
                    CateID: 'EC_10000644',
                    CateName: '慢磨機丨榨汁機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000645',
                    CateID: 'EC_10000645',
                    CateName: '冰淇淋丨刨冰機丨優格機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000646',
                    CateID: 'EC_10000646',
                    CateName: '咖啡機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000647',
                    CateID: 'EC_10000647',
                    CateName: '膠囊咖啡機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000648',
                    CateID: 'EC_10000648',
                    CateName: '磨豆機丨奶泡機丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000636',
                    CateID: 'EC_10000636',
                    CateName: '洗碗機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000637',
                    CateID: 'EC_10000637',
                    CateName: '崁入式洗碗機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001032',
                    CateID: 'EC_10001032',
                    CateName: '烘碗機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000638',
                    CateID: 'EC_10000638',
                    CateName: '懸掛式烘碗機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000639',
                    CateID: 'EC_10000639',
                    CateName: '下崁式烘碗機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001009',
                    CateID: 'EC_10001009',
                    CateName: '其他廚房家電'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000076',
                CateID: 'EC_10000076',
                CateName: '廚房家電'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000670',
                    CateID: 'EC_10000670',
                    CateName: '按摩枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000671',
                    CateID: 'EC_10000671',
                    CateName: '按摩椅丨墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000669',
                    CateID: 'EC_10000669',
                    CateName: '美腿丨泡腳機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001029',
                    CateID: 'EC_10001029',
                    CateName: '熱敷墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000668',
                    CateID: 'EC_10000668',
                    CateName: '助眠機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000672',
                    CateID: 'EC_10000672',
                    CateName: '其他按摩器具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000078',
                CateID: 'EC_10000078',
                CateName: '健康家電'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000735',
                    CateID: 'EC_10000735',
                    CateName: '家庭劇院'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000736',
                    CateID: 'EC_10000736',
                    CateName: '卡拉OK設備'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000741',
                    CateID: 'EC_10000741',
                    CateName: '藍芽喇叭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000737',
                    CateID: 'EC_10000737',
                    CateName: '喇叭丨多媒體喇叭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000738',
                    CateID: 'EC_10000738',
                    CateName: '音響丨手提音響'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000739',
                    CateID: 'EC_10000739',
                    CateName: '錄放影機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000740',
                    CateID: 'EC_10000740',
                    CateName: 'HDMI丨AV丨線材丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000085',
                CateID: 'EC_10000085',
                CateName: '視聽娛樂'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000676',
                    CateID: 'EC_10000676',
                    CateName: '吹風機丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000678',
                    CateID: 'EC_10000678',
                    CateName: '負離子吹風機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000677',
                    CateID: 'EC_10000677',
                    CateName: '膠原丨奈米吹風機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000679',
                    CateID: 'EC_10000679',
                    CateName: '直丨捲髮器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000680',
                    CateID: 'EC_10000680',
                    CateName: '理髮器丨整髮丨按摩梳'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000681',
                    CateID: 'EC_10000681',
                    CateName: '刮鬍刀丨得體刀'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000682',
                    CateID: 'EC_10000682',
                    CateName: '電動牙刷丨沖牙機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000683',
                    CateID: 'EC_10000683',
                    CateName: '洗臉機丨美顏器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001031',
                    CateID: 'EC_10001031',
                    CateName: '美甲丨硬皮機'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000080',
                CateID: 'EC_10000080',
                CateName: '美容家電'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000729',
                    CateID: 'EC_10000729',
                    CateName: '電熨斗'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000730',
                    CateID: 'EC_10000730',
                    CateName: '掛燙機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000731',
                    CateID: 'EC_10000731',
                    CateName: '除毛球機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000732',
                    CateID: 'EC_10000732',
                    CateName: '電話丨傳真丨事務機'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000084',
                CateID: 'EC_10000084',
                CateName: '生活家電'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000596',
                    CateID: 'EC_10000596',
                    CateName: 'DC扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000597',
                    CateID: 'EC_10000597',
                    CateName: '立扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000598',
                    CateID: 'EC_10000598',
                    CateName: '循環扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000604',
                    CateID: 'EC_10000604',
                    CateName: '移動式水冷器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000603',
                    CateID: 'EC_10000603',
                    CateName: '水冷霧化扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000599',
                    CateID: 'EC_10000599',
                    CateName: '大廈扇丨箱扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000600',
                    CateID: 'EC_10000600',
                    CateName: '桌扇丨壁扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000601',
                    CateID: 'EC_10000601',
                    CateName: '工業排風扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000602',
                    CateID: 'EC_10000602',
                    CateName: '無葉片風扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001020',
                    CateID: 'EC_10001020',
                    CateName: '夾扇丨USB扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000605',
                    CateID: 'EC_10000605',
                    CateName: '扇類配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000072',
                CateID: 'EC_10000072',
                CateName: '風扇'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000587',
                    CateID: 'EC_10000587',
                    CateName: '窗型定頻'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000588',
                    CateID: 'EC_10000588',
                    CateName: '窗型變頻'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000589',
                    CateID: 'EC_10000589',
                    CateName: '窗型冷暖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000590',
                    CateID: 'EC_10000590',
                    CateName: '分離式定頻-單冷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000591',
                    CateID: 'EC_10000591',
                    CateName: '分離式變頻-單冷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000592',
                    CateID: 'EC_10000592',
                    CateName: '分離式變頻-冷暖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000593',
                    CateID: 'EC_10000593',
                    CateName: '移動式空調'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000594',
                    CateID: 'EC_10000594',
                    CateName: '冷氣遙控器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000595',
                    CateID: 'EC_10000595',
                    CateName: '冷氣濾網丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000071',
                CateID: 'EC_10000071',
                CateName: '冷暖空調'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001014',
                    CateID: 'EC_10001014',
                    CateName: '耳機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001015',
                    CateID: 'EC_10001015',
                    CateName: '無線充電器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001016',
                    CateID: 'EC_10001016',
                    CateName: '線材'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10001042',
                    CateID: 'EC_10001042',
                    CateName: '3C周邊'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10001013',
                CateID: 'EC_10001013',
                CateName: '智慧3C'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000673',
                    CateID: 'EC_10000673',
                    CateName: '吸入式捕蚊燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000674',
                    CateID: 'EC_10000674',
                    CateName: '電擊式捕蚊燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Appliance/c/EC_10000675',
                    CateID: 'EC_10000675',
                    CateName: '驅鼠丨驅蟲器丨電蚊拍'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Appliance/c/EC_10000079',
                CateID: 'EC_10000079',
                CateName: '捕蚊丨驅蟲家電'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '分享愛的地方',
                H2Heading: '超值推薦↘8折起',
                EndTime: '2023-04-30 17:33',
                LinkTarget: 'N',
                imagedetailsPk: 8798518475146,
                memo: '廚具衛浴',
                pk: 8798518475145,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Kitchens_Bathrooms/c/EC_10000070'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2023-04-30 17:31',
                LinkTarget: 'N',
                imagedetailsPk: 8798518442378,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h1d/hff/9087248105502/9087248105502.jpg',
                memo: '廚具衛浴',
                pk: 8798518442377,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hef/h72/9087248039966/9087248039966.jpg',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/edm/trplus/SP_Bathroom'
              }
            ],
            CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032091',
            CateID: 'EC_10032091',
            CateName: '廚具衛浴'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001148',
                    CateID: 'EC_10001148',
                    CateName: '新品上市搶鮮購'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001338',
                    CateID: 'EC_10001338',
                    CateName: '門市TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001682',
                    CateID: 'EC_10001682',
                    CateName: '網路TOP熱銷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032140',
                    CateID: 'EC_10032140',
                    CateName: '德國工藝BRAVAT'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001733',
                    CateID: 'EC_10001733',
                    CateName: '省水專區'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10060127',
                    CateID: 'EC_10060127',
                    CateName: '特力屋PRO特選收納系列'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10061001',
                    CateID: 'EC_10061001',
                    CateName: '231起►Tolen無痕吸盤收納'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10061000',
                    CateID: 'EC_10061000',
                    CateName: '9折►精選純棉毛浴巾系列'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032136',
                CateID: 'EC_10032136',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10055016',
                    CateID: 'EC_10055016',
                    CateName: 'HOLA限定'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10055015',
                    CateID: 'EC_10055015',
                    CateName: '特力屋限定'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10055014',
                CateID: 'EC_10055014',
                CateName: '★年度熱搜排行榜'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000663',
                    CateID: 'EC_10000663',
                    CateName: '單層式'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000665',
                    CateID: 'EC_10000665',
                    CateName: '隱藏式'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000664',
                    CateID: 'EC_10000664',
                    CateName: '斜背｜深罩式'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000666',
                    CateID: 'EC_10000666',
                    CateName: 'T型式'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032105',
                CateID: 'EC_10032105',
                CateName: '排油煙機'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000660',
                    CateID: 'EC_10000660',
                    CateName: '台爐式-天然瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000661',
                    CateID: 'EC_10000661',
                    CateName: '台爐式-桶裝瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000656',
                    CateID: 'EC_10000656',
                    CateName: '檯面式-天然瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000657',
                    CateID: 'EC_10000657',
                    CateName: '檯面式-桶裝瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000658',
                    CateID: 'EC_10000658',
                    CateName: '崁入式-天然瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000659',
                    CateID: 'EC_10000659',
                    CateName: '崁入式-桶裝瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001008',
                    CateID: 'EC_10001008',
                    CateName: 'IH丨電陶爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000662',
                    CateID: 'EC_10000662',
                    CateName: '瓦斯爐配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032106',
                CateID: 'EC_10032106',
                CateName: '瓦斯爐'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001331',
                    CateID: 'EC_10001331',
                    CateName: '強制排氣'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001332',
                    CateID: 'EC_10001332',
                    CateName: '屋外自然排氣'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000650',
                    CateID: 'EC_10000650',
                    CateName: '13L以下-天然瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000651',
                    CateID: 'EC_10000651',
                    CateName: '14~20L-天然瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032119',
                    CateID: 'EC_10032119',
                    CateName: '20L以上-天然瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000652',
                    CateID: 'EC_10000652',
                    CateName: '13L以下-桶裝瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000653',
                    CateID: 'EC_10000653',
                    CateName: '14~20L-桶裝瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032120',
                    CateID: 'EC_10032120',
                    CateName: '20L以上-桶裝瓦斯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000649',
                    CateID: 'EC_10000649',
                    CateName: '瞬熱型電熱水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000654',
                    CateID: 'EC_10000654',
                    CateName: '儲熱型電熱水器'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032109',
                CateID: 'EC_10032109',
                CateName: '熱水器'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001027',
                    CateID: 'EC_10001027',
                    CateName: '馬桶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000376',
                    CateID: 'EC_10000376',
                    CateName: '免治馬桶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000377',
                    CateID: 'EC_10000377',
                    CateName: '馬桶蓋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001012',
                    CateID: 'EC_10001012',
                    CateName: '馬桶配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000389',
                    CateID: 'EC_10000389',
                    CateName: '馬桶刷'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032107',
                CateID: 'EC_10032107',
                CateName: '免治｜馬桶｜馬桶蓋'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000373',
                    CateID: 'EC_10000373',
                    CateName: '廚房龍頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000375',
                    CateID: 'EC_10000375',
                    CateName: '水管管材｜零件｜省水器'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032116',
                CateID: 'EC_10032116',
                CateName: '廚房設備'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000574',
                    CateID: 'EC_10000574',
                    CateName: '碗盤瀝水架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000575',
                    CateID: 'EC_10000575',
                    CateName: '杯架丨酒架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10000576',
                    CateID: 'EC_10000576',
                    CateName: '伸縮棚架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000577',
                    CateID: 'EC_10000577',
                    CateName: '碗筷架丨叉匙架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000578',
                    CateID: 'EC_10000578',
                    CateName: '鍋具架丨刀具砧板架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000579',
                    CateID: 'EC_10000579',
                    CateName: '紙巾抹布架丨保鮮膜架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000580',
                    CateID: 'EC_10000580',
                    CateName: '調味罐架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000581',
                    CateID: 'EC_10000581',
                    CateName: '多功能置物架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001010',
                    CateID: 'EC_10001010',
                    CateName: '廚房掛勾丨吊桿'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000069',
                CateID: 'EC_10000069',
                CateName: '廚房收納'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000371',
                    CateID: 'EC_10000371',
                    CateName: '沐浴龍頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000372',
                    CateID: 'EC_10000372',
                    CateName: '面盆龍頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000379',
                    CateID: 'EC_10000379',
                    CateName: '蓮蓬頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032121',
                    CateID: 'EC_10032121',
                    CateName: '花灑｜淋浴柱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001408',
                    CateID: 'EC_10001408',
                    CateName: '浴缸'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000383',
                    CateID: 'EC_10000383',
                    CateName: '洗衣槽'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000378',
                    CateID: 'EC_10000378',
                    CateName: '換氣扇丨排氣扇'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000380',
                    CateID: 'EC_10000380',
                    CateName: '浴櫃丨鏡箱丨吊櫃'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000381',
                    CateID: 'EC_10000381',
                    CateName: '浴鏡丨平台'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000382',
                    CateID: 'EC_10000382',
                    CateName: '泡澡桶丨泡腳桶丨面盆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000386',
                    CateID: 'EC_10000386',
                    CateName: '浴簾丨伸縮桿'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000387',
                    CateID: 'EC_10000387',
                    CateName: '盥洗丨清潔用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000390',
                    CateID: 'EC_10000390',
                    CateName: '體重計'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001024',
                    CateID: 'EC_10001024',
                    CateName: '給皂器'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032117',
                CateID: 'EC_10032117',
                CateName: '衛浴設備'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000384',
                    CateID: 'EC_10000384',
                    CateName: '扶手丨安全座椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000385',
                    CateID: 'EC_10000385',
                    CateName: '止滑墊｜支撐架'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032118',
                CateID: 'EC_10032118',
                CateName: '衛浴安全'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000582',
                    CateID: 'EC_10000582',
                    CateName: '毛巾架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10032122',
                    CateID: 'EC_10032122',
                    CateName: '肥皂盤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000583',
                    CateID: 'EC_10000583',
                    CateName: '儲物架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000584',
                    CateID: 'EC_10000584',
                    CateName: '衛生紙盒丨架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000585',
                    CateID: 'EC_10000585',
                    CateName: '轉角丨牆角置物架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000586',
                    CateID: 'EC_10000586',
                    CateName: '馬桶置物架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Storage_shelves/c/EC_10001037',
                    CateID: 'EC_10001037',
                    CateName: '沐浴用層架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10001038',
                    CateID: 'EC_10001038',
                    CateName: '衛浴收納掛勾'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000070',
                CateID: 'EC_10000070',
                CateName: '衛浴收納'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000350',
                    CateID: 'EC_10000350',
                    CateName: '方巾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000351',
                    CateID: 'EC_10000351',
                    CateName: '毛巾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000352',
                    CateID: 'EC_10000352',
                    CateName: '浴巾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000353',
                    CateID: 'EC_10000353',
                    CateName: '浴袍丨浴帽'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000354',
                    CateID: 'EC_10000354',
                    CateName: '擦手巾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000355',
                    CateID: 'EC_10000355',
                    CateName: '春夏服飾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000356',
                    CateID: 'EC_10000356',
                    CateName: '秋冬服飾'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10000038',
                CateID: 'EC_10000038',
                CateName: '毛巾丨浴袍丨家居服'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062010',
                    CateID: 'EC_10062010',
                    CateName: '熱水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062011',
                    CateID: 'EC_10062011',
                    CateName: '瓦斯爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062012',
                    CateID: 'EC_10062012',
                    CateName: '排油煙機'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062008',
                CateID: 'EC_10062008',
                CateName: '櫻花 SAKURA'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062013',
                    CateID: 'EC_10062013',
                    CateName: '熱水器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062014',
                    CateID: 'EC_10062014',
                    CateName: '瓦斯爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062015',
                    CateID: 'EC_10062015',
                    CateName: '排油煙機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062016',
                    CateID: 'EC_10062016',
                    CateName: '洗碗/烘碗機'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Kitchens_Bathrooms/c/EC_10062009',
                CateID: 'EC_10062009',
                CateName: '林內 Rinnai'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '妝點生活中的每段時光',
                H2Heading: '精選燈具↘6折起',
                EndTime: '2018-12-31 02:58',
                LinkTarget: 'N',
                imagedetailsPk: 8797175282058,
                memo: '妝點生活中的每段時光',
                pk: 8797175282057,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Lighting/c/EC_10001099'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2021-01-04 21:38',
                LinkTarget: 'N',
                imagedetailsPk: 8799404226954,
                MobileImage: '',
                'Alt': '親手妝點生活中的每段時光',
                memo: '親手妝點生活中的每段時光',
                pk: 8799404226953,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h4a/he2/9087243059230/9087243059230.jpg',
                Queue: 1,
                Link: 'https://www.trplus.com.tw/TR_Lighting/c/EC_10001099'
              }
            ],
            CateUrl: '/TR_Lighting/c/EC_10000008',
            CateID: 'EC_10000008',
            CateName: '燈具'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10001156',
                    CateID: 'EC_10001156',
                    CateName: '新品上市NEW'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10060054',
                    CateID: 'EC_10060054',
                    CateName: '門店熱銷TOP'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10060055',
                    CateID: 'EC_10060055',
                    CateName: '網路熱銷TOP'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10060056',
                    CateID: 'EC_10060056',
                    CateName: '特力屋獨家販售'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10027140',
                    CateID: 'EC_10027140',
                    CateName: '結帳85折►飛利浦吸頂燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10001674',
                    CateID: 'EC_10001674',
                    CateName: '629元起►北歐吸頂燈破盤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10001673',
                    CateID: 'EC_10001673',
                    CateName: '989元起►繽紛馬卡龍吊燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10060057',
                    CateID: 'EC_10060057',
                    CateName: '4折起►歐洲美學精品燈飾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10060058',
                    CateID: 'EC_10060058',
                    CateName: '6折起►TOSHIBA燈泡燈具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Lighting/c/EC_10001099',
                CateID: 'EC_10001099',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10001493',
                    CateID: 'EC_10001493',
                    CateName: '風格吊燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10001494',
                    CateID: 'EC_10001494',
                    CateName: '吸頂燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10001495',
                    CateID: 'EC_10001495',
                    CateName: '系列燈飾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10001496',
                    CateID: 'EC_10001496',
                    CateName: '半吸頂燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10060059',
                    CateID: 'EC_10060059',
                    CateName: '打造個人風格設計燈具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Lighting/c/EC_10001492',
                CateID: 'EC_10001492',
                CateName: '【2019 風格燈飾】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000745',
                    CateID: 'EC_10000745',
                    CateName: '5W以下'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000742',
                    CateID: 'EC_10000742',
                    CateName: '6-9W'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000743',
                    CateID: 'EC_10000743',
                    CateName: '10-12W'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000744',
                    CateID: 'EC_10000744',
                    CateName: '13W以上'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Lighting/c/EC_10032038',
                    CateID: 'EC_10032038',
                    CateName: '燈絲燈泡'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10000086',
                CateID: 'EC_10000086',
                CateName: 'LED燈泡'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000746',
                    CateID: 'EC_10000746',
                    CateName: '管徑丨T5'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000747',
                    CateID: 'EC_10000747',
                    CateName: '管徑丨T8'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000750',
                    CateID: 'EC_10000750',
                    CateName: '特殊型燈管'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10000087',
                CateID: 'EC_10000087',
                CateName: 'LED燈管'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000751',
                    CateID: 'EC_10000751',
                    CateName: '燈泡丨10W以下'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000752',
                    CateID: 'EC_10000752',
                    CateName: '燈泡丨11-30W'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000753',
                    CateID: 'EC_10000753',
                    CateName: '燈泡丨31W以上'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10000088',
                CateID: 'EC_10000088',
                CateName: '省電燈泡'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000754',
                    CateID: 'EC_10000754',
                    CateName: '20W以下'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000755',
                    CateID: 'EC_10000755',
                    CateName: '21-30W'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000756',
                    CateID: 'EC_10000756',
                    CateName: '31W以上'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10034009',
                CateID: 'EC_10034009',
                CateName: '一般燈管'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000757',
                    CateID: 'EC_10000757',
                    CateName: 'LED丨半吸頂燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000758',
                    CateID: 'EC_10000758',
                    CateName: 'LED丨吸頂燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000759',
                    CateID: 'EC_10000759',
                    CateName: '半吸頂燈丨單燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000760',
                    CateID: 'EC_10000760',
                    CateName: '半吸頂燈丨2-4燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000761',
                    CateID: 'EC_10000761',
                    CateName: '半吸頂燈丨5燈↑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000762',
                    CateID: 'EC_10000762',
                    CateName: '吸頂燈丨單燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000763',
                    CateID: 'EC_10000763',
                    CateName: '吸頂燈丨2-4燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000764',
                    CateID: 'EC_10000764',
                    CateName: '吸頂燈丨5燈↑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000765',
                    CateID: 'EC_10000765',
                    CateName: '防水型丨衛浴陽台'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10000089',
                CateID: 'EC_10000089',
                CateName: '吸頂燈專區'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000768',
                    CateID: 'EC_10000768',
                    CateName: '桌燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10034015',
                    CateID: 'EC_10034015',
                    CateName: '檯燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000775',
                    CateID: 'EC_10000775',
                    CateName: '立燈丨落地燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10000090',
                CateID: 'EC_10000090',
                CateName: '桌燈丨檯燈丨立燈'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000771',
                    CateID: 'EC_10000771',
                    CateName: '吊扇 l 吊扇燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000770',
                    CateID: 'EC_10000770',
                    CateName: '吊燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000772',
                    CateID: 'EC_10000772',
                    CateName: '水晶燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10034017',
                CateID: 'EC_10034017',
                CateName: '吊扇燈丨吊燈丨水晶燈'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000767',
                    CateID: 'EC_10000767',
                    CateName: '壁燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000766',
                    CateID: 'EC_10000766',
                    CateName: '夾燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10034020',
                CateID: 'EC_10034020',
                CateName: '壁燈丨夾燈'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000769',
                    CateID: 'EC_10000769',
                    CateName: '崁燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10034019',
                    CateID: 'EC_10034019',
                    CateName: '杯燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10034016',
                    CateID: 'EC_10034016',
                    CateName: '鹵素燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10034018',
                CateID: 'EC_10034018',
                CateName: '崁燈丨杯燈丨鹵素燈'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000773',
                    CateID: 'EC_10000773',
                    CateName: '感應燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000774',
                    CateID: 'EC_10000774',
                    CateName: '小夜燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/rootCategory/%E7%89%B9%E5%8A%9B%2B/%E7%87%88%E5%85%B7/%E6%84%9F%E6%87%89%E7%87%88%E4%B8%A8%E5%B0%8F%E5%A4%9C%E7%87%88/c/EC_10034021',
                CateID: 'EC_10034021',
                CateName: '感應燈丨小夜燈'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000749',
                    CateID: 'EC_10000749',
                    CateName: '櫥櫃燈丨層板燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000776',
                    CateID: 'EC_10000776',
                    CateName: '平板燈丨輕鋼架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000777',
                    CateID: 'EC_10000777',
                    CateName: '山型燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000778',
                    CateID: 'EC_10000778',
                    CateName: '軌道燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10034022',
                CateID: 'EC_10034022',
                CateName: '裝潢燈具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000779',
                    CateID: 'EC_10000779',
                    CateName: '感應丨插地丨庭園燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000781',
                    CateID: 'EC_10000781',
                    CateName: '探照燈丨戶外投射燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000780',
                    CateID: 'EC_10000780',
                    CateName: '景觀壁燈丨柱燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10000091',
                CateID: 'EC_10000091',
                CateName: '戶外燈具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000783',
                    CateID: 'EC_10000783',
                    CateName: '手電筒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000784',
                    CateID: 'EC_10000784',
                    CateName: '手持探照燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10000782',
                    CateID: 'EC_10000782',
                    CateName: '頭燈丨特殊用途燈'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10000092',
                CateID: 'EC_10000092',
                CateName: '隨身燈具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10001017',
                    CateID: 'EC_10001017',
                    CateName: '燈座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10034011',
                    CateID: 'EC_10034011',
                    CateName: '感應器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10034012',
                    CateID: 'EC_10034012',
                    CateName: '啟動器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10034014',
                    CateID: 'EC_10034014',
                    CateName: '燈帶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Lighting/c/EC_10034013',
                    CateID: 'EC_10034013',
                    CateName: '其他配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Lighting/c/EC_10034010',
                CateID: 'EC_10034010',
                CateName: '燈具配件'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '親手創造自己家的味道',
                H2Heading: '打造夢想居家工具↘6折起',
                EndTime: '2020-12-31 09:19',
                LinkTarget: 'N',
                imagedetailsPk: 8799337118090,
                memo: '打造夢想居家工具↘6折起',
                pk: 8799337118089,
                H3Heading: '',
                Queue: 0,
                Link: 'https://www.trplus.com.tw/TR_Tools_Building/c/EC_10001107'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2021-01-04 03:09',
                LinkTarget: 'N',
                imagedetailsPk: 8797175511434,
                MobileImage: '',
                'Alt': '親手創造屬於自己家的味道',
                memo: '親手創造屬於自己家的味道',
                pk: 8797175511433,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h7e/h2b/9087243255838/9087243255838.jpg',
                Queue: 1,
                Link: 'https://www.trplus.com.tw/TR_Tools_Building/c/EC_10001107'
              }
            ],
            CateUrl: '/TR_Tools_Building/c/EC_10000010',
            CateID: 'EC_10000010',
            CateName: '工具建材'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001164',
                    CateID: 'EC_10001164',
                    CateName: '新品上市NEW'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001675',
                    CateID: 'EC_10001675',
                    CateName: '門店熱銷TOP'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001729',
                    CateID: 'EC_10001729',
                    CateName: '網路熱銷TOP'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001734',
                    CateID: 'EC_10001734',
                    CateName: '7折起►DIY材料包'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10061015',
                    CateID: 'EC_10061015',
                    CateName: '4折up►Incare地板特惠'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10069035',
                    CateID: 'EC_10069035',
                    CateName: '7折up►12月慶下殺推薦'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10069038',
                    CateID: 'EC_10069038',
                    CateName: '6折up►Incare工具幫手'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001406',
                    CateID: 'EC_10001406',
                    CateName: '4折起►精選防水防霉修繕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10069036',
                    CateID: 'EC_10069036',
                    CateName: '83折up►ADC工具送燈泡'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10069037',
                    CateID: 'EC_10069037',
                    CateName: '73折up►U-Cart手推車'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001407',
                    CateID: 'EC_10001407',
                    CateName: '55折起►優質防水抗菌漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001425',
                    CateID: 'EC_10001425',
                    CateName: '4折up►Effect仿木地板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10001676',
                    CateID: 'EC_10001676',
                    CateName: '8折起►ANZA油漆刷具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10064052',
                    CateID: 'EC_10064052',
                    CateName: '6折►收納管贈導線夾'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10001107',
                CateID: 'EC_10001107',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10045000',
                    CateID: 'EC_10045000',
                    CateName: 'BLACK+DECKER'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10045001',
                    CateID: 'EC_10045001',
                    CateName: 'STANLEY'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10049008',
                    CateID: 'EC_10049008',
                    CateName: 'BOSCH'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10049009',
                    CateID: 'EC_10049009',
                    CateName: 'RYOBI'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10049010',
                    CateID: 'EC_10049010',
                    CateName: 'DEWAL'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10049011',
                    CateID: 'EC_10049011',
                    CateName: 'Makita'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10060048',
                    CateID: 'EC_10060048',
                    CateName: '火災｜緊急救護商品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_Tools_Building/c/EC_10060049',
                    CateID: 'EC_10060049',
                    CateName: '獨家販售熱銷品'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_Tools_Building/c/EC_10001104',
                CateID: 'EC_10001104',
                CateName: '【工具建材大賞】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001052',
                    CateID: 'EC_10001052',
                    CateName: '惡魔機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000900',
                    CateID: 'EC_10000900',
                    CateName: '電鑽機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000901',
                    CateID: 'EC_10000901',
                    CateName: '起子機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000903',
                    CateID: 'EC_10000903',
                    CateName: '砂磨丨砂輪機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000902',
                    CateID: 'EC_10000902',
                    CateName: '電鋸丨圓鋸丨線鋸機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000907',
                    CateID: 'EC_10000907',
                    CateName: '高壓清洗機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000906',
                    CateID: 'EC_10000906',
                    CateName: '割草機丨電動吹風機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000905',
                    CateID: 'EC_10000905',
                    CateName: '熱風槍丨烙鐵'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000904',
                    CateID: 'EC_10000904',
                    CateName: '打蠟機丨工藝機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000908',
                    CateID: 'EC_10000908',
                    CateName: '發電機丨抽水機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001285',
                    CateID: 'EC_10001285',
                    CateName: '其他電動工具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000107',
                CateID: 'EC_10000107',
                CateName: '電動工具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001055',
                    CateID: 'EC_10001055',
                    CateName: '鑽頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000911',
                    CateID: 'EC_10000911',
                    CateName: '起子頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001051',
                    CateID: 'EC_10001051',
                    CateName: '砂磨片丨砂輪片'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000909',
                    CateID: 'EC_10000909',
                    CateName: '圓鋸片'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000912',
                    CateID: 'EC_10000912',
                    CateName: '線鋸片丨帶鋸條'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000910',
                    CateID: 'EC_10000910',
                    CateName: '鋰電池'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001059',
                    CateID: 'EC_10001059',
                    CateName: '電鑽其他配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000913',
                    CateID: 'EC_10000913',
                    CateName: '其他配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000108',
                CateID: 'EC_10000108',
                CateName: '電動工具配件'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000915',
                    CateID: 'EC_10000915',
                    CateName: '空壓機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000916',
                    CateID: 'EC_10000916',
                    CateName: '噴風槍丨打氣機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000917',
                    CateID: 'EC_10000917',
                    CateName: '氣動釘槍丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000918',
                    CateID: 'EC_10000918',
                    CateName: '氣動起子機丨套筒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000919',
                    CateID: 'EC_10000919',
                    CateName: '氣動研磨機丨雕刻機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000920',
                    CateID: 'EC_10000920',
                    CateName: '幫浦及配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001060',
                    CateID: 'EC_10001060',
                    CateName: '其他氣動工具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000109',
                CateID: 'EC_10000109',
                CateName: '氣動工具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000925',
                    CateID: 'EC_10000925',
                    CateName: '手推車丨腳輪'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000923',
                    CateID: 'EC_10000923',
                    CateName: '工作梯'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000922',
                    CateID: 'EC_10000922',
                    CateName: '工具箱丨袋丨掛架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000921',
                    CateID: 'EC_10000921',
                    CateName: '工作照明燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000924',
                    CateID: 'EC_10000924',
                    CateName: '工作檯丨工具組合'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000926',
                    CateID: 'EC_10000926',
                    CateName: '測量工具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000110',
                CateID: 'EC_10000110',
                CateName: '作業工具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000929',
                    CateID: 'EC_10000929',
                    CateName: '螺絲起子'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001053',
                    CateID: 'EC_10001053',
                    CateName: '扳手'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000927',
                    CateID: 'EC_10000927',
                    CateName: '套筒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000928',
                    CateID: 'EC_10000928',
                    CateName: '鎚丨錘'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001054',
                    CateID: 'EC_10001054',
                    CateName: '鑷丨鉗'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000930',
                    CateID: 'EC_10000930',
                    CateName: '鋸刀丨刨刀'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000931',
                    CateID: 'EC_10000931',
                    CateName: '木工刀具丨夾具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000932',
                    CateID: 'EC_10000932',
                    CateName: '剪刀丨切割刀'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000933',
                    CateID: 'EC_10000933',
                    CateName: '砂磨工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000936',
                    CateID: 'EC_10000936',
                    CateName: '其他工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000934',
                    CateID: 'EC_10000934',
                    CateName: '工作手套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000935',
                    CateID: 'EC_10000935',
                    CateName: '口罩丨安全護具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000937',
                    CateID: 'EC_10000937',
                    CateName: '3D列印機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001011',
                    CateID: 'EC_10001011',
                    CateName: '3D列印耗材丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000111',
                CateID: 'EC_10000111',
                CateName: '手工具'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000938',
                    CateID: 'EC_10000938',
                    CateName: '保養潤滑劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000940',
                    CateID: 'EC_10000940',
                    CateName: '壁虎丨螺絲安卡丨鉸鍊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000939',
                    CateID: 'EC_10000939',
                    CateName: '傢俱五金配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000112',
                CateID: 'EC_10000112',
                CateName: '五金用品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000941',
                    CateID: 'EC_10000941',
                    CateName: '保險櫃丨現金箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000942',
                    CateID: 'EC_10000942',
                    CateName: '消防設備丨緊急照明'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000951',
                    CateID: 'EC_10000951',
                    CateName: '門鎖丨掛鎖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001040',
                    CateID: 'EC_10001040',
                    CateName: '窗鎖丨防盜鎖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001041',
                    CateID: 'EC_10001041',
                    CateName: '兒童安全防護'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000944',
                    CateID: 'EC_10000944',
                    CateName: '防撞條丨護角'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000945',
                    CateID: 'EC_10000945',
                    CateName: '防滑丨止滑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000946',
                    CateID: 'EC_10000946',
                    CateName: '門擋丨擋縫條'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000947',
                    CateID: 'EC_10000947',
                    CateName: '門窗氣密條'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000948',
                    CateID: 'EC_10000948',
                    CateName: '紗網丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000943',
                    CateID: 'EC_10000943',
                    CateName: '防身丨防狼'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000949',
                    CateID: 'EC_10000949',
                    CateName: '告示丨警示用品丨其他防護'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000950',
                    CateID: 'EC_10000950',
                    CateName: '門鈴'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000953',
                    CateID: 'EC_10000953',
                    CateName: '門把丨握把'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000952',
                    CateID: 'EC_10000952',
                    CateName: '智能家居'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000113',
                CateID: 'EC_10000113',
                CateName: '居家防護丨保全'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000957',
                    CateID: 'EC_10000957',
                    CateName: '膠帶丨膠類丨氣泡袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000955',
                    CateID: 'EC_10000955',
                    CateName: '開關丨蓋板丨插座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000956',
                    CateID: 'EC_10000956',
                    CateName: '分接器丨擴充器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000958',
                    CateID: 'EC_10000958',
                    CateName: '保險絲丨插頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000954',
                    CateID: 'EC_10000954',
                    CateName: '電錶丨測電器丨定時器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000962',
                    CateID: 'EC_10000962',
                    CateName: '電線丨電話電器配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000959',
                    CateID: 'EC_10000959',
                    CateName: '信箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000960',
                    CateID: 'EC_10000960',
                    CateName: '溫丨濕度計'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000961',
                    CateID: 'EC_10000961',
                    CateName: '綑綁丨固定器具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000963',
                    CateID: 'EC_10000963',
                    CateName: '鐵管丨管頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000964',
                    CateID: 'EC_10000964',
                    CateName: 'USB&3P延長線'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001018',
                    CateID: 'EC_10001018',
                    CateName: '3P延長線'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000965',
                    CateID: 'EC_10000965',
                    CateName: '2P延長線'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000966',
                    CateID: 'EC_10000966',
                    CateName: '電纜輪座'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000967',
                    CateID: 'EC_10000967',
                    CateName: '1號丨2號電池'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000968',
                    CateID: 'EC_10000968',
                    CateName: '3號電池'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000969',
                    CateID: 'EC_10000969',
                    CateName: '4號電池'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000970',
                    CateID: 'EC_10000970',
                    CateName: '充電丨其他型電池'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000114',
                CateID: 'EC_10000114',
                CateName: '生活電料'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000971',
                    CateID: 'EC_10000971',
                    CateName: '油漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000972',
                    CateID: 'EC_10000972',
                    CateName: '水泥漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000973',
                    CateID: 'EC_10000973',
                    CateName: '乳膠漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000974',
                    CateID: 'EC_10000974',
                    CateName: '底漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000975',
                    CateID: 'EC_10000975',
                    CateName: '防水丨隔熱漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000976',
                    CateID: 'EC_10000976',
                    CateName: '木器漆丨木器保養'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000977',
                    CateID: 'EC_10000977',
                    CateName: '特殊效果漆丨噴漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000978',
                    CateID: 'EC_10000978',
                    CateName: '防霉丨防鏽漆丨壁癌漆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000979',
                    CateID: 'EC_10000979',
                    CateName: '油漆刷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000980',
                    CateID: 'EC_10000980',
                    CateName: '滾刷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000981',
                    CateID: 'EC_10000981',
                    CateName: '工具組'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000983',
                    CateID: 'EC_10000983',
                    CateName: '油漆盤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000984',
                    CateID: 'EC_10000984',
                    CateName: '矽利康'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000985',
                    CateID: 'EC_10000985',
                    CateName: '塑鋼土丨補土'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000986',
                    CateID: 'EC_10000986',
                    CateName: '膠類接著劑'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10001000',
                    CateID: 'EC_10001000',
                    CateName: '其他相關修補保養'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000115',
                CateID: 'EC_10000115',
                CateName: '油漆防水'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000987',
                    CateID: 'EC_10000987',
                    CateName: '室內拼裝木地板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000988',
                    CateID: 'EC_10000988',
                    CateName: '塑膠地磚'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000989',
                    CateID: 'EC_10000989',
                    CateName: '室外拼裝地板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000991',
                    CateID: 'EC_10000991',
                    CateName: '收邊木條丨泡棉'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000992',
                    CateID: 'EC_10000992',
                    CateName: '門飾條丨專用膠'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000116',
                CateID: 'EC_10000116',
                CateName: '地板地磚'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000993',
                    CateID: 'EC_10000993',
                    CateName: '吸音棉'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000994',
                    CateID: 'EC_10000994',
                    CateName: '板材丨角料丨角鋼'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000995',
                    CateID: 'EC_10000995',
                    CateName: '天花板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000996',
                    CateID: 'EC_10000996',
                    CateName: '水泥丨砂丨防水布'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000998',
                    CateID: 'EC_10000998',
                    CateName: '壁紙丨腰帶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_Tools_Building/c/EC_10000999',
                    CateID: 'EC_10000999',
                    CateName: '壁紙丨磁磚工具'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_Tools_Building/c/EC_10000117',
                CateID: 'EC_10000117',
                CateName: '建材'
              }
            }
          ]
        },
        {
          LCategory: {
            isMainChannelCategory: true,
            CateAdvText: [
              {
                H1Heading: '美姿雕塑不偷懶',
                H2Heading: '元氣動起來↘65折起',
                EndTime: '2018-12-31 03:27',
                LinkTarget: 'N',
                imagedetailsPk: 8796552755594,
                memo: '運動休閒-選單文字-0705',
                pk: 8796552755593,
                H3Heading: '',
                Queue: 1,
                Link: 'https://goo.gl/afzGE5'
              }
            ],
            CateAdvImg: [
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-31 02:24',
                LinkTarget: 'N',
                imagedetailsPk: 8798977653130,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/he2/h8a/9003917312030/9003917312030.jpg',
                memo: '運動休閒-選單bn1',
                pk: 8798977653129,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hef/he8/9003917246494/9003917246494.jpg',
                Queue: 1,
                Link: 'https://goo.gl/afzGE5'
              },
              {
                H1Heading: '',
                H2Heading: '',
                EndTime: '2018-12-31 02:24',
                LinkTarget: 'N',
                imagedetailsPk: 8797174725002,
                MobileImage: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/hdb/hf5/9003917180958/9003917180958.jpg',
                memo: '運動休閒-選單bn2',
                pk: 8797174725001,
                Image: 'https://cdn.trplus.com.tw/medias/sys_master/advimage/advimage/h04/hcd/9003917115422/9003917115422.jpg',
                Queue: 2,
                Link: 'https://goo.gl/afzGE5'
              }
            ],
            CateUrl: '/TR_HealthyBeauty/c/EC_10000009',
            CateID: 'EC_10000009',
            CateName: '休閒'
          },
          MCategories: [
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10060069',
                    CateID: 'EC_10060069',
                    CateName: 'NEW新品上市'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10060070',
                    CateID: 'EC_10060070',
                    CateName: '門店熱銷TOP'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10060071',
                    CateID: 'EC_10060071',
                    CateName: '網路熱銷TOP'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001737',
                    CateID: 'EC_10001737',
                    CateName: '27折起►烤肉季同樂會'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001160',
                    CateID: 'EC_10001160',
                    CateName: '5折起►手創秘密花園'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001339',
                    CateID: 'EC_10001339',
                    CateName: '75折起►戶外野營好幫手'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001340',
                    CateID: 'EC_10001340',
                    CateName: '65折起►戶外休閒桌椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001355',
                    CateID: 'EC_10001355',
                    CateName: '58折起►涼夏降溫好幫手'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10058016',
                    CateID: 'EC_10058016',
                    CateName: '5折起►WonderCore健身'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001356',
                    CateID: 'EC_10001356',
                    CateName: '9折起►Adidas運動配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001585',
                    CateID: 'EC_10001585',
                    CateName: '9折起►美姿調整椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001586',
                    CateID: 'EC_10001586',
                    CateName: '5折起►Incare休閒運動趣'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001735',
                    CateID: 'EC_10001735',
                    CateName: '5折起►Outdoor露營職人'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: false,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001736',
                    CateID: 'EC_10001736',
                    CateName: '5折起►宅家塑型健身術'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: false,
                CateUrl: '/TR_HealthyBeauty/c/EC_10001103',
                CateID: 'EC_10001103',
                CateName: '【館長推薦】'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000807',
                    CateID: 'EC_10000807',
                    CateName: 'GPS丨衛星導航'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000808',
                    CateID: 'EC_10000808',
                    CateName: '行車紀錄器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000809',
                    CateID: 'EC_10000809',
                    CateName: '汽車配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000810',
                    CateID: 'EC_10000810',
                    CateName: '自行車丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000811',
                    CateID: 'EC_10000811',
                    CateName: '機油丨油精'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000812',
                    CateID: 'EC_10000812',
                    CateName: '汽車清潔丨美容'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000098',
                CateID: 'EC_10000098',
                CateName: '車用百貨'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000813',
                    CateID: 'EC_10000813',
                    CateName: '烤肉爐丨碳烤爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000814',
                    CateID: 'EC_10000814',
                    CateName: '休閒瓦斯爐'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000815',
                    CateID: 'EC_10000815',
                    CateName: '野炊器具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000816',
                    CateID: 'EC_10000816',
                    CateName: '烤肉用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000817',
                    CateID: 'EC_10000817',
                    CateName: '冰桶丨冰磚丨水箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000818',
                    CateID: 'EC_10000818',
                    CateName: '保冰袋丨保溫袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000819',
                    CateID: 'EC_10000819',
                    CateName: '拐杖椅丨手杖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000820',
                    CateID: 'EC_10000820',
                    CateName: '野餐桌丨椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000821',
                    CateID: 'EC_10000821',
                    CateName: '野餐墊丨籃丨袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000822',
                    CateID: 'EC_10000822',
                    CateName: '露營燈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000823',
                    CateID: 'EC_10000823',
                    CateName: '睡袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000824',
                    CateID: 'EC_10000824',
                    CateName: '帳篷'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000826',
                    CateID: 'EC_10000826',
                    CateName: '天幕帳'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000827',
                    CateID: 'EC_10000827',
                    CateName: '充氣沙發丨床墊丨睡墊'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000828',
                    CateID: 'EC_10000828',
                    CateName: '其他用品'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000099',
                CateID: 'EC_10000099',
                CateName: '休閒丨野營'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000845',
                    CateID: 'EC_10000845',
                    CateName: '拉筋板丨繩'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000846',
                    CateID: 'EC_10000846',
                    CateName: '健腹機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000847',
                    CateID: 'EC_10000847',
                    CateName: '跑步機丨計步器'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000848',
                    CateID: 'EC_10000848',
                    CateName: '階梯踏板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000849',
                    CateID: 'EC_10000849',
                    CateName: '重量訓練器材'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000851',
                    CateID: 'EC_10000851',
                    CateName: '倒立機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000854',
                    CateID: 'EC_10000854',
                    CateName: '美腿機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000855',
                    CateID: 'EC_10000855',
                    CateName: '騎馬機丨電臀椅'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000856',
                    CateID: 'EC_10000856',
                    CateName: '健身車'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000857',
                    CateID: 'EC_10000857',
                    CateName: '健步機丨踏步機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001036',
                    CateID: 'EC_10001036',
                    CateName: '平衡丨滑板車'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000858',
                    CateID: 'EC_10000858',
                    CateName: '抖抖機'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000862',
                    CateID: 'EC_10000862',
                    CateName: '啞鈴'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000859',
                    CateID: 'EC_10000859',
                    CateName: '運動配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000101',
                CateID: 'EC_10000101',
                CateName: '運動丨健身'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000860',
                    CateID: 'EC_10000860',
                    CateName: '瑜珈墊丨瑜珈包丨舖巾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000863',
                    CateID: 'EC_10000863',
                    CateName: '健身球丨抗力球'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000864',
                    CateID: 'EC_10000864',
                    CateName: '瘦身圈'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000865',
                    CateID: 'EC_10000865',
                    CateName: '瑜珈棒丨磚'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000866',
                    CateID: 'EC_10000866',
                    CateName: '彈力帶丨繩'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000861',
                    CateID: 'EC_10000861',
                    CateName: '配件小物'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000102',
                CateID: 'EC_10000102',
                CateName: '瑜珈用品'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000867',
                    CateID: 'EC_10000867',
                    CateName: '機能運動服'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000868',
                    CateID: 'EC_10000868',
                    CateName: '涼感巾丨袖套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000869',
                    CateID: 'EC_10000869',
                    CateName: '智慧手錶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000870',
                    CateID: 'EC_10000870',
                    CateName: '智慧手環'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001033',
                    CateID: 'EC_10001033',
                    CateName: '防曬用品'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000871',
                    CateID: 'EC_10000871',
                    CateName: '其它'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000103',
                CateID: 'EC_10000103',
                CateName: '穿戴裝置'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000872',
                    CateID: 'EC_10000872',
                    CateName: '電動按摩棒'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000873',
                    CateID: 'EC_10000873',
                    CateName: '按摩小物'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10001058',
                    CateID: 'EC_10001058',
                    CateName: '保健防護'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000874',
                    CateID: 'EC_10000874',
                    CateName: '冰丨熱敷袋'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000104',
                CateID: 'EC_10000104',
                CateName: '紓壓按摩'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000829',
                    CateID: 'EC_10000829',
                    CateName: '灑水器丨水管車'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000830',
                    CateID: 'EC_10000830',
                    CateName: '澆水水管丨配件'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000831',
                    CateID: 'EC_10000831',
                    CateName: '筢丨鏟丨鋤丨爪'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000832',
                    CateID: 'EC_10000832',
                    CateName: '籬笆丨圍籬丨防風網'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000833',
                    CateID: 'EC_10000833',
                    CateName: '踏板丨石踏板'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000834',
                    CateID: 'EC_10000834',
                    CateName: '花藝剪丨其他工具'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000835',
                    CateID: 'EC_10000835',
                    CateName: '造景配件丨裝飾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000836',
                    CateID: 'EC_10000836',
                    CateName: '人造花丨垂籐丨蔬果'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000837',
                    CateID: 'EC_10000837',
                    CateName: '人造草皮'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000838',
                    CateID: 'EC_10000838',
                    CateName: '花瓶丨花器丨花盆'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000839',
                    CateID: 'EC_10000839',
                    CateName: '水盤丨花皿丨底盤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000840',
                    CateID: 'EC_10000840',
                    CateName: '吊盆丨花架丨花槽架'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000841',
                    CateID: 'EC_10000841',
                    CateName: '花槽丨種植箱'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000842',
                    CateID: 'EC_10000842',
                    CateName: '種子種球丨桌上植栽'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000844',
                    CateID: 'EC_10000844',
                    CateName: '介質丨土壤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000843',
                    CateID: 'EC_10000843',
                    CateName: '肥料'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000100',
                CateID: 'EC_10000100',
                CateName: '園藝丨造景'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000875',
                    CateID: 'EC_10000875',
                    CateName: '行李箱丨20吋↓'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000876',
                    CateID: 'EC_10000876',
                    CateName: '行李箱丨21~26吋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000877',
                    CateID: 'EC_10000877',
                    CateName: '行李箱丨27~31吋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000878',
                    CateID: 'EC_10000878',
                    CateName: '行李吊牌丨密碼鎖'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000879',
                    CateID: 'EC_10000879',
                    CateName: '行李束丨綁帶'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000880',
                    CateID: 'EC_10000880',
                    CateName: '防塵保護套'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000881',
                    CateID: 'EC_10000881',
                    CateName: '拉桿旅行袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000882',
                    CateID: 'EC_10000882',
                    CateName: '折疊旅行袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000883',
                    CateID: 'EC_10000883',
                    CateName: '衣物收納袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000884',
                    CateID: 'EC_10000884',
                    CateName: '鞋子收納袋'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000885',
                    CateID: 'EC_10000885',
                    CateName: '旅行盥洗包丨化妝包'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000886',
                    CateID: 'EC_10000886',
                    CateName: '防搶包丨證件護照夾'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000887',
                    CateID: 'EC_10000887',
                    CateName: '後背丨肩背丨側背包'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000888',
                    CateID: 'EC_10000888',
                    CateName: '電子秤'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000889',
                    CateID: 'EC_10000889',
                    CateName: '購物行李車'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000890',
                    CateID: 'EC_10000890',
                    CateName: '萬用轉接頭'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000891',
                    CateID: 'EC_10000891',
                    CateName: '眼罩丨充氣枕'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000892',
                    CateID: 'EC_10000892',
                    CateName: '包包掛勾丨配件'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000105',
                CateID: 'EC_10000105',
                CateName: '行李箱丨配件'
              }
            },
            {
              SCategories: [
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000893',
                    CateID: 'EC_10000893',
                    CateName: '星級飯店餐券'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000894',
                    CateID: 'EC_10000894',
                    CateName: '知名餐廳餐券'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000895',
                    CateID: 'EC_10000895',
                    CateName: '商務丨飯店住宿'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10000898',
                    CateID: 'EC_10000898',
                    CateName: '親子丨遊輪丨休閒票券'
                  }
                },
                {
                  SCategory: {
                    isMainChannelCategory: true,
                    CateUrl: '/TR_HealthyBeauty/c/EC_10024024',
                    CateID: 'EC_10024024',
                    CateName: '清潔服務票券'
                  }
                }
              ],
              MCategory: {
                isMainChannelCategory: true,
                CateUrl: '/TR_HealthyBeauty/c/EC_10000106',
                CateID: 'EC_10000106',
                CateName: '餐券丨票券'
              }
            }
          ]
        }
      ],
      resultHashCode: 1096169330
    }
    
    return {heroes, First_nav, Second_nav};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}