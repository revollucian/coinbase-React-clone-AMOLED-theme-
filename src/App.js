
import './App.css';
import logo from './images/Coinbase-Logo.wine.png';
import avatar from './images/avatar.jpg'
import home from './images/dashboard.svg'
import portofolio from './images/pie-chart.svg'
import trade from './images/arrow-up.svg'
import pay from './images/dollar-coin.svg'
import foryou from './images/for-you.svg'
import learn from './images/gift-box.svg'
import notifications from './images/bell.svg'
import invite from './images/add-user.svg'
import calendar from './images/calendar.svg'
import gain from './images/increase (1).svg'
import exchange from './images/exchange.svg'
import sent from './images/up-arrow-in-circle.svg'

import usd_coin from './images/USD_Coin_icon.png'
import bitcoin from './images/bitcoin.png'
import bitcoin_cash from './images/Bitcoin_Cash.png'
import ethereum from './images/XTVCETH--600.png'

import { Line } from 'react-chartjs-2';


const data = {
  labels: ['AUG 31', 'SEP 6', 'SEP 11', 'SEP 17', 'SEP 22', 'SEP 28'],
  datasets: [
    {
      label: 'Portofolio value',
      lineThickness: 0.5,
      data: [1509,1456,1757,1550,1602,1270,1337,1950,1864,1391,1821,1093,1525,1279,1078,1881,1049,1519,1850,1288,1384,1251,1914,1585,1223,1381,1595,1963,1514,1087,1784,1746,1883,1466,1721,1036,1197,1885,1366,1464,1806,1838,1462,1598,1012,1742,1094,1822,1676,1924,1556,1113,1652,1799,1529,1235,1460,1645,1173,1736,1568,1999,1713,1312,1273,1934,1966,1738,1571,1832,1445,1583,1696,1955,1985,1953,1180,1542,1370,1524,1860,1839,1661,1071,1415,1019,1990,1056,1517,1046,1181,1581,1126,1515,1303,1668,1426,1749,1155,1300,1441,1103,1535,1253,1910,1207,1643,1356,1151,1601,1667,1930,1558,1168,1625,1911,1095,1669,1226,1739,1811,1420,1217,1541,1631,1728,1849,1510,1276,1520,1454,1952,1486,1489,1357,1863,1858,1478,1804,1024,1174,1909,1487,1135,1573,1646,1111,1206,1123,1504,1461,1159,1257,1285,1260,1869,1215,1191,1897,1263,1922,1106,1231,1917,1855,1762,1492,1812,1009,1295,1687,1060,1107,1834,1310,1634,1597,1564,1025,1061,1365,1539,1446,1682,1753,1175,1496,1566,1928,1641,1503,1485,1403,1647,1204,1650,1237,1995,1172,1935,1294,1385,1220,1169,1188,1170,1244,1044,1691,1203,1005,1376,1472,1898,1613,1048,1451,1563,1554,1797,1006,1360,1771,1689,1353,1039,1740,1931,1949,1770,1296,1807,1127,1390,1389,1163,1059,1418,1029,1068,1592,1028,1962,1292,1194,1176,1704,1438,1428,1258,1594,1052,1190,1764,1342,1443,1422,1373,1016,1317,1421,1976,1880,1921,1846,1116,1933,1477,1906,1723,1706,1640,1382,1146,1246,1925,1512,1847,1268,1054,1787,1092,1363,1102,1533,1590,1234,1731,1932,1656,1225,1528,1616,1444,1759,1570,1747,1960,1782,1853,1436,1020,1038,1008,1470,1559,1002,1287,1507,1975,1145,1467,1677,1140,1543,1660,1267,1404,1617,1488,1579,1136,1177,1589,1991,1430,1664,1707,1045,1680,1662,1336,1143,1031,1851,1142,1080,1653,1004,1725,1916,1973,1396,1576,1948,1891,1936,1854,1088,1859,1685,1712,1678,1138,1741,1228,1627,1994,1943,1794,1630,1291,1788,1222,1410,1974,1886,1628,1562,1324,1213,1671,1743,1026,1555,1395,1293,1066,1724,1833,1793,1199,1063,1876,1419,1262,1200,1348,1816,1493,1651,1077,1961,1034,1904,1210,1307,1997,1227,1844,1614,1255,1405,1875,1475,1148,1101,1537,1278,1011,1970,1386,1979,1050,1499,1124,1265,1929,1823,1981,1283,1574,1313,1674,1449,1802,1115,1783,1606,1473,1587,1638,1536,1842,1350,1655,1734,1760,1413,1789,1321,1243,1003,1690,1672,1796,1918,1526,1183,1341,1889,1108,1861,1328,1710,1958,1457,1871,1945,1946,1516,1964,1149,1134,1959,1523,1482,1261,1125,1642,1941,1907,1967,1425,1546,1269,1730,1663,1252,1417,1187,1491,1866,1766,1289,1192,1608,1768,1752,1635,1338,1067,1450,1229,1299,1117,1890,1358,1578,1603,1800,1969,1359,1657,1178,1965,1505,1327,1274,1701,1325,1271,1411,1479,1761,1584,1453,1968,1236,1942,1582,1211,1726,1128,1351,1820,1433,1318,1988,1233,1982,1468,1694,1442,1569,1737,1035,1007,1406,1096,1801,2000,1266,1666,1511,1856,1654,1588,1629,1238,1551,1540,1021,1349,1240,1010,1993,1565,1755,1022,1779,1275,1400,1193,1000,1407,1683,1001,1882,1392,1186,1636,1733,1397,1919,1902,1805,1769,1872,1332,1189,1665,1545,1306,1954,1474,1114,1927,1448,1399,1212,1744,1354,1786,1862,1722,1670,1119,1369,1185,1908,1120,1892,1675,1118,1552,1158,1247,1829,1756,1248,1895,1424,1416,1673,1679,1501,1857,1708,1580,1069,1147,1290,1205,1818,1375,1715,1105,1164,1218,1216,1089,1494,1591,1615,1132,1319,1099,1775,1137,1845,1745,1648,1828,1130,1322,1852,1304,1774,1345,1129,1301,1064,1330,1141,1815,1409,1316,1374,1305,1104,1414,1637,1920,1343,1877,1153,1684,1692,1720,1362,1065,1751,1790,1506,1611,1887,1900,1624,1484,1596,1167,1072,1221,1179,1297,1996,1699,1767,1879,1408,1347,1773,1277,1388,1795,1245,1719,1609,1058,1873,1431,1777,1622,1329,1905,1899,1383,1947,1644,1157,1986,1553,1377,1848,1623,1378,1649,1957,1346,1165,1711,1620,1530,1042,1393,1455,1498,1717,1298,1249,1841,1112,1604,1398,1447,1980,1544,1978,1714,1144,1798,1315,1977,1939,1264,1632,1076,1429,1014,1621,1198,1367,1202,1196,1735,1639,1718,1480,1572,1030,1561,1619,1100,1282,1023,1557,1254,1870,1250,1086,1121,1874,1364,1781,1686,1150,1729,1286,1259,1912,1075,1083,1440,1937,1062,1819,1513,1697,1458,1940,1901,1057,1575,1903,1626,1476,1956,1826,1951,1983,1758,1567,1824,1534,1703,1693,1998,1527,1497,1727,1915,1884,1280,1702,1896,1122,1500,1368,1785,1070,1154,1309,1074,1518,1372,1308,1522,1184,1809,1508,1531,1923,1339,1041,1750,1161,1055,1778,1459,1201,1209,1681,1698,1813,1320,1162,1335,1439,1139,1051,1547,1314,1344,1765,1465,1082,1618,1043,1333,1560,1152,1607,1495,1878,1538,1156,1355,1352,1017,1810,1490,1835,1284,1748,1716,1133,1776,1015,1326,1577,1412,1700,1791,1705,1814,1037,1612,1463,1331,1380,1371,1971,1432,1079,1361,1830,1090,1081,1232,1502,1166,1808,1605,1913,1688,1695,1483,1033,1532,1013,1481,1867,1825,1843,1219,1230,1926,1224,1018,1160,1073,1471,1323,1084,1098,1633,1239,1836,1110,1032,1241,1085,1944,1865,1938,1989,1732,1780,1053,1868,1549,1427,1984,1171,1709,1434,1097,1394,1658,1972,1040,1214,1379,1272,1334,1182,1423,1586,1131,1195,1599,1256,1452,1803,1659,1091,1027,1600,1109,1840,1548,1340,1242,1402,1792,1401,1047,1772,1894,1992,1593,1521,1888,1754,1763,1987,1387,1610,1831,1817,1827,1435,1302,1437,1837,1208,1469,1893,1281,1311],

      backgroundColor: 'rgb(0, 0, 0)',
      borderColor: 'rgba(59,130,246)',
    },
  ],
};


const options ={ 
  plugins: {
    legend: {
        display: false,
    },
},

  maintainAspectRatio: false,
  scales: { y: 
    { display: false,

       } } };

function App() {
  return (
    <div className="App ">
      <div id="main" className="relative min-h-screen flex">

       {/* the Coinbase side bar */} 

        <div id="navigation" className="bg-black w-64 border-r border-gray-800">
          <div id="logo" className="w-24 mt-6 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1101.64 196.79" className="text-blue-500" fill="currentColor">
          <path class="st0" d="M222.34,54.94c-40.02,0-71.29,30.38-71.29,71.05s30.48,70.79,71.29,70.79c40.81,0,71.82-30.64,71.82-71.05  C294.16,85.58,263.68,54.94,222.34,54.94z M222.61,167.47c-22.79,0-39.49-17.7-39.49-41.47c0-24.04,16.43-41.73,39.22-41.73  c23.06,0,39.75,17.96,39.75,41.73S245.4,167.47,222.61,167.47z M302.9,85.85h19.88v108.3h31.8V57.58H302.9V85.85z M71.02,84.26  c16.7,0,29.95,10.3,34.98,25.62h33.66c-6.1-32.75-33.13-54.94-68.37-54.94C31.27,54.94,0,85.32,0,126s30.48,70.79,71.29,70.79  c34.45,0,62.01-22.19,68.11-55.21H106c-4.77,15.32-18.02,25.89-34.72,25.89c-23.06,0-39.22-17.7-39.22-41.47  C32.07,101.96,47.97,84.26,71.02,84.26z M907.12,112.79l-23.32-3.43c-11.13-1.58-19.08-5.28-19.08-14  c0-9.51,10.34-14.26,24.38-14.26c15.37,0,25.18,6.6,27.3,17.43h30.74c-3.45-27.47-24.65-43.58-57.24-43.58  c-33.66,0-55.92,17.17-55.92,41.47c0,23.24,14.58,36.72,43.99,40.94l23.32,3.43c11.4,1.58,17.76,6.08,17.76,14.53  c0,10.83-11.13,15.32-26.5,15.32c-18.82,0-29.42-7.66-31.01-19.28h-31.27c2.92,26.68,23.85,45.43,62.01,45.43  c34.72,0,57.77-15.85,57.77-43.06C950.05,129.43,933.36,116.75,907.12,112.79z M338.68,1.32c-11.66,0-20.41,8.45-20.41,20.07  s8.74,20.07,20.41,20.07c11.66,0,20.41-8.45,20.41-20.07S350.34,1.32,338.68,1.32z M805.36,104.34c0-29.58-18.02-49.39-56.18-49.39  c-36.04,0-56.18,18.23-60.16,46.23h31.54c1.59-10.83,10.07-19.81,28.09-19.81c16.17,0,24.12,7.13,24.12,15.85  c0,11.36-14.58,14.26-32.6,16.11c-24.38,2.64-54.59,11.09-54.59,42.79c0,24.57,18.29,40.41,47.44,40.41  c22.79,0,37.1-9.51,44.26-24.57c1.06,13.47,11.13,22.19,25.18,22.19h18.55v-28.26h-15.64V104.34z M774.09,138.68  c0,18.23-15.9,31.7-35.25,31.7c-11.93,0-22-5.02-22-15.58c0-13.47,16.17-17.17,31.01-18.75c14.31-1.32,22.26-4.49,26.24-10.57  V138.68z M605.28,54.94c-17.76,0-32.6,7.4-43.2,19.81V0h-31.8v194.15h31.27v-17.96c10.6,12.94,25.71,20.6,43.73,20.6  c38.16,0,67.05-30.11,67.05-70.79S642.91,54.94,605.28,54.94z M600.51,167.47c-22.79,0-39.49-17.7-39.49-41.47  s16.96-41.73,39.75-41.73c23.06,0,39.22,17.7,39.22,41.73C639.99,149.77,623.3,167.47,600.51,167.47z M454.22,54.94  c-20.67,0-34.19,8.45-42.14,20.34v-17.7h-31.54v136.56h31.8v-74.22c0-20.87,13.25-35.66,32.86-35.66c18.29,0,29.68,12.94,29.68,31.7  v78.19h31.8v-80.56C506.69,79.24,488.94,54.94,454.22,54.94z M1101.64,121.51c0-39.09-28.62-66.56-67.05-66.56  c-40.81,0-70.76,30.64-70.76,71.05c0,42.53,32.07,70.79,71.29,70.79c33.13,0,59.1-19.55,65.72-47.28h-33.13  c-4.77,12.15-16.43,19.02-32.07,19.02c-20.41,0-35.78-12.68-39.22-34.87h105.21V121.51z M998.28,110.94  c5.04-19.02,19.35-28.26,35.78-28.26c18.02,0,31.8,10.3,34.98,28.26H998.28z"/>
          </svg>
          </div>
          
        {/* buttons and icons */} 
          <nav>
            <div className="text-white mt-14 ml-4 justify-left">
              <span className="flex items-center cursor-pointer">
                <img src={home} className="w-8 h-8 py-2 bg-gray-900 rounded-full "></img>               
                <span className="ml-5 text-sm font-semibold">Home</span>            
              </span>
              <span className="flex items-center mt-9 cursor-pointer">
                <img src={portofolio} className="w-8 h-8 py-2 bg-gray-900 rounded-full"></img>               
                <span className="ml-5 text-sm font-semibold">Portofolio</span>            
              </span>
              <span className="flex items-center mt-9 cursor-pointer">
                <img src={trade} className="w-8 h-8 py-2 bg-gray-900 rounded-full"></img>               
                <span className="ml-5 text-sm font-semibold">Trade</span>            
              </span>
  
              <span className="flex items-center mt-9 cursor-pointer">
                <img src={pay} className="w-8 h-8 py-2 bg-gray-900 rounded-full"></img>               
                <span className="ml-5 text-sm font-semibold">Pay</span>            
              </span>
              <span className="flex items-center mt-9 cursor-pointer">
                <img src={foryou} className="w-8 h-8 py-2 bg-gray-900 rounded-full"></img>               
                <span className="ml-5 text-sm font-semibold">For You</span>            
              </span>
              <span className="flex items-center mt-9 cursor-pointer">
                <img src={learn} className="w-8 h-8 py-2 bg-gray-900 rounded-full"></img>               
                <span className="ml-5 text-sm font-semibold">Learn and earn</span>            
              </span>
              <span className="flex items-center mt-9 cursor-pointer">
                <img src={notifications} className="w-8 h-8 py-2 bg-gray-900 rounded-full"></img>               
                <span className="ml-5 text-sm font-semibold">Notifications</span>            
              </span>
              <span className="flex items-center mt-9 cursor-pointer">
                <img src={invite} className="w-8 h-8 py-2 bg-gray-900 rounded-full"></img>               
                <span className="ml-5 text-sm font-semibold">Invite Friends</span>
                <span className="ml-5 text-xs font-semibold text-blue-700 bg-white w-9 h-7 flex items-center px-1 rounded-md">£7.4</span> 
              </span>
            </div>
          </nav>
          
        </div>

        <div>
          
        </div>

        <div id="header" className="w-full bg-black">
          <div className="flex justify-between text-white border-b border-gray-800 px-6 py-3">
            <div className="text-xl font-bold tracking-tighter mt-1">Portofolio</div>
            <div className="flex items-center">
              <button className="font-semibold bg-blue-600 text-black text-lg px-4 py-2 rounded-md mr-2 tracking-tighter">Buy / Sell</button>
              <button className="font-bold border border-gray-800 px-4 py-2 rounded-md mr-4 ">Send / Receive</button>
              <div className="border-r border-gray-800 mr-4 h-9 flex"></div>
              <button><img src={avatar} className="rounded-full w-8 h-8 mr-4 mb-1"></img></button>
            </div>
          </div>

          <div id="wallet" className="bg-black text-white">
              <div id="wallet_row_one" className="py-6 px-28">
                <div className="grid grid-cols-3 gap-5">
                  <div className="col-span-2">
                  <div id="balance" className="border border-gray-800 h-96 rounded-sm">
                    
                    <div className="flex justify-between px-10 py-5">

                      {/* title */} 

                      <div className="text-left">
                      <span className="block text-gray-500">
                      Portfolio balance
                      </span>
                      <span className="block text-4xl font-semibold">
                      £1,329.13   
                      </span>
                      </div>

                      {/* dates */} 
                      <div className="flex text-gray-500 text-xs font-bold">
                        <span className="mr-5">1H</span>
                        <span className="mr-5">24H</span>
                        <span className="mr-5">1W</span>
                        <span className="mr-5 text-blue-700">1M</span>
                        <span className="mr-5">1Y</span>
                        <span>ALL</span>         
                      </div>
                    </div>

                    {/* graph */} 

                    <div className="h-64 px-5 mt-3">        
                    <Line data={data} options={options}/>
                    </div>
                  </div>
                  </div>

                  <div>                  
                    <div id="do_more_with_crypto" className="border border-gray-800 h-56 rounded-sm">

                    <div className="border-b border-gray-800 text-left flex items-center px-5 py-4">
                      <span className="font-semibold text-lg">Do more with crypto</span>
                    </div>

                    <div className="flex items-center px-5 py-4 border-b border-gray-800">
                      <div><img src={calendar} className="w-11 h-11 bg-white rounded-md"></img></div>
                      <div className="text-left ml-4">
                        <span className="block text-lg">Earn Yield</span>
                        <span className="text-gray-500 text-sm">Earn up to 5.00% yield by holding crypto</span>
                      </div>
                    </div>

                    
                    <div className="flex items-center px-5 py-3 ">
                      <div><img src={gain} className="w-11 h-11 bg-white rounded-md"></img></div>
                      <div className="text-left ml-4">
                        <span className="block text-lg">Invest over time</span>
                        <span className="text-gray-500 text-sm">Buy crypto every day, week or month</span>
                      </div>
                    </div>
                  </div>
                  

                  <div id="do_more_with_crypto2" className="border border-gray-800 h-36 rounded-sm mt-4 px-5 py-5">

                    <div className="text-left">
                      <span className="block text-md font-semibold">Earn yield</span>
                      <span className="text-sm text-gray-500">Earn up to 5.00% yield by holding crypto on Coinbase</span>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                      <div className="text-xl font-bold">£0.00</div>
                      <div className="text-gray-500">0.00%</div>
                    </div>

                  </div>
                        
                  </div>
                </div>


                {/* second row */} 

                <div id="second_row" className="overflow-auto">
                <div className="grid grid-cols-3 gap-5 mt-5">
                  <div className="col-span-2">
                            <div id="Assets" className="border border-gray-800 h-huge-xl rounded-sm">

                              <div className="px-7 py-5">
                                <div className="border-b border-gray-800">
                                <div className="flex"><span className="text-2xl font-semibold">Your assets</span></div>
                                <div className="flex justify-between text-sm text-gray-400 mt-8 mb-3"><span>Asset</span><span className="ml-10">Balance</span><span>Allocation</span></div> 
                                </div>


                                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                                <div className="flex items-center"><svg aria-hidden="true" width="36" height="36" viewBox="0 0 32 32" class="CurrencyIcon__makeFiatIcon-sc-12mnnqm-0 iOHINY" size="36" bgcolor="backgroundAccent" lighten="0" role="img"><path d="M16 0C7.176 0 0 7.176 0 16s7.176 16 16 16 16-7.176 16-16S24.824 0 16 0zm0 30.06C8.242 30.06 1.94 23.759 1.94 16 1.94 8.242 8.241 1.94 16 1.94c7.758 0 14.06 6.302 14.06 14.06 0 7.758-6.302 14.06-14.06 14.06z" fill="#1652F0"></path><path d="M20.567 19.54h-1.086c-.203 0-.407.126-.465.33-.184.717-.689 1.056-1.532 1.056-.437 0-.94-.184-1.523-.397-.349-.126-.717-.262-1.105-.369l-.126-.039.048-.126c.146-.407.214-.746.214-1.125 0-.591-.059-1.173-.175-1.823l-.02-.116h3.075c.164 0 .29-.126.29-.29v-.874a.286.286 0 00-.29-.29h-3.356l-.029-.127c-.135-.717-.232-1.357-.232-2.075 0-1.367.872-2.288 2.181-2.288 1.116 0 1.746.485 2.056 1.59a.495.495 0 00.466.378h1.25a.393.393 0 00.388-.446c-.358-2.056-1.842-3.18-4.218-3.18-2.57 0-4.363 1.59-4.363 3.859 0 .698.087 1.367.29 2.172l.04.126h-1.097a.286.286 0 00-.29.291v.873c0 .165.126.29.29.29h1.513l.03.117c.164.572.31 1.173.31 1.804 0 .407-.059.756-.194 1.134l-.02.058-.058.02c-.94.262-1.474 1.018-1.716 1.823-.088.3.155.61.475.61h.747a.485.485 0 00.436-.27c.165-.36.514-.65 1.105-.65.447 0 .941.203 1.504.446.727.31 1.56.65 2.511.65 1.63 0 2.764-1.019 3.055-2.687a.38.38 0 00-.379-.456z" fill="#1652F0"></path></svg>
                                <span className="ml-3 text-lg">British Pounds</span>
                               </div>
                                <span className="text-xl mr-32">£0.00</span>                                
                                <div className="flex items-center"><span className="text-xl">0%</span></div>
                                <div className="absolute h-2 w-2 bg-blue-600 rounded-full ml-huge"></div>                                     
                                </div>

                                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                                  <div className="flex items-center"><svg aria-hidden="true" width="36" height="36" viewBox="0 0 32 32" class="CurrencyIcon__makeFiatIcon-sc-12mnnqm-0 iOHINY" size="36" bgcolor="backgroundAccent" lighten="0" role="img"><path d="M16 0C7.176 0 0 7.176 0 16s7.176 16 16 16 16-7.176 16-16S24.824 0 16 0zm0 30.06C8.242 30.06 1.94 23.759 1.94 16 1.94 8.242 8.241 1.94 16 1.94c7.758 0 14.06 6.302 14.06 14.06 0 7.758-6.302 14.06-14.06 14.06z" fill="#1652F0"></path><path d="M20.713 18.288H19.53c-.359 0-.543.165-.602.398-.349 1.503-1.28 2.288-2.705 2.288-1.687 0-2.725-1.076-2.977-3.112h2.803c.174 0 .32-.117.358-.282l.107-.484a.372.372 0 00-.359-.447h-2.967v-1.202h3.394c.174 0 .32-.116.359-.281l.106-.485a.372.372 0 00-.358-.446h-3.443c.262-2.085 1.319-3.239 2.967-3.239 1.339 0 2.26.756 2.59 2.085a.47.47 0 00.465.359h1.328c.185 0 .32-.165.291-.34-.426-2.395-2.114-3.752-4.674-3.752-2.773 0-4.732 1.871-5.139 4.897H9.91a.368.368 0 00-.368.368v.485c0 .204.165.368.368.368h1.096v1.203H9.91a.368.368 0 00-.368.368v.485c0 .204.165.369.368.369h1.164c.398 3.006 2.308 4.81 5.12 4.81 2.657 0 4.354-1.426 4.82-4.035.019-.213-.127-.378-.301-.378z" fill="#1652F0"></path></svg>
                                  <span className="ml-3 text-lg">Euro</span>
                                  </div>
                                <div><span className="text-xl">£0.00</span> <span className="text-xl text-gray-500">€0.00</span></div>                                
                                <div className="flex items-center"><span className="text-xl">0%</span></div>
                                <div className="absolute h-2 w-2 bg-blue-600 rounded-full ml-huge"></div>                                     
                                </div>

                                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                                <div className="flex items-center"><img src={usd_coin} className="w-9 h-9"></img><span className="ml-3 text-lg">USD Coin</span></div>
                                <div className="mr-5"><span className="text-xl">£0.00</span> <span className="text-xl text-gray-500">0 USDC</span></div>                              
                                <div className="flex items-center"><span className="text-xl">0%</span></div>
                                <div className="absolute h-2 w-2 bg-blue-400 rounded-full ml-huge"></div>                                     
                                </div>

                                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                                  <div className="flex items-center"><img src={bitcoin} className="w-9 h-9"></img><span className="ml-3 text-lg">Bitcoin</span></div>
                                  <div className="mr-4"><span className="text-xl">£0.00</span> <span className="text-xl text-gray-500">€0.00</span></div>                                 
                                <div className="flex items-center"><span className="text-xl">0%</span></div>
                                <div className="absolute h-2 w-2 bg-yellow-500 rounded-full ml-huge"></div>                                     
                                </div>

                                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                                  <div className="flex items-center"><img src={bitcoin_cash} className="w-9 h-9"></img><span className="ml-3 text-lg">Bitcoin Cash</span></div>
                                  <div className="mr-14"><span className="text-xl">£0.00</span> <span className="text-xl text-gray-500">€0.00</span></div>                                 
                                <div className="flex items-center"><span className="text-xl">0%</span></div>
                                <div className="absolute h-2 w-2 bg-green-500 rounded-full ml-huge"></div>                                     
                                </div>

                                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                                  <div className="flex items-center"><img src={ethereum} className="w-9 h-9 rounded-full"></img><span className="ml-3 text-lg">Ethereum</span></div>
                                  <div className="mr-10"><span className="text-xl">£0.00</span> <span className="text-xl text-gray-500">€0.00</span></div>                                 
                                <div className="flex items-center"><span className="text-xl">0%</span></div>
                                <div className="absolute h-2 w-2 bg-blue-500 rounded-full ml-huge"></div>                                     
                                </div>



                              </div>    
                              
        
                                                        
                            </div>
                        </div>


                            <div>   
                            <div className="border border-gray-800 h-huge rounded-sm">
                                <div className="border-b border-gray-800 text-left flex items-center px-5 py-4">
                                  <span className="font-semibold text-lg">Recent transactions</span>
                                </div>

                                <div className="flex items-center px-5 py-3 border-b border-gray-800">
                                <div><img src={sent} className="w-10 h-10"></img></div>
                                <div className="text-left ml-4">
                                  <span className="block text-lg">Sent Litecoin</span>
                                  <span className="text-gray-500 text-sm">-0.0286962 LTC on Sep 08, 2021</span>
                                </div>
                              </div>

                              <div className="flex items-center px-5 py-3 border-b border-gray-800">
                                <div><img src={exchange} className="w-10 h-10"></img></div>
                                <div className="text-left ml-4">
                                  <span className="block text-lg">Converted to Litecoin</span>
                                  <span className="text-gray-500 text-sm">0.03041151 LTC on Sep 08, 2021</span>
                                </div>
                              </div>

                              <div className="flex items-center px-5 py-3 border-b border-gray-800">
                                <div><img src={exchange} className="w-10 h-10"></img></div>
                                <div className="text-left ml-4">
                                  <span className="block text-lg">Converted from Ethereum</span>
                                  <span className="text-gray-500 text-sm">-0.00020053 ETH on Sep 07, 2021</span>
                                </div>
                              </div>

                              <div className="flex items-center px-5 py-3 border-b border-gray-800">
                                <div><img src={exchange} className="w-10 h-10"></img></div>
                                <div className="text-left ml-4">
                                  <span className="block text-lg">Converted from Litecoin</span>
                                  <span className="text-gray-500 text-sm">-0.0275018 LTC on Sep 07, 2021</span>
                                </div>
                              </div>

                              <div className="flex items-center px-5 py-3 ">
                                <div><img src={exchange} className="w-10 h-10"></img></div>
                                <div className="text-left ml-4">
                                  <span className="block text-lg">Converted to Litecoin</span>
                                  <span className="text-gray-500 text-sm">0.01689945 LTC on Aug 28, 2021</span>
                                </div>
                              </div>
                          </div>
                        
                  </div>
                </div>
                </div>
                 {/* second row ends*/} 
                                  
              </div>
          </div>

          
        </div>

        


      </div>
      
    </div>
  );
}

export default App;