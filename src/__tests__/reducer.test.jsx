import { splitCredit, initialState } from "../reducers/creditReducer.js";
//import informationEngineering from "../../cources/informationEngineering.js";
//import informationSystems from "../cources/informationSystems.js";
//import machineElectronics from "../cources/machineElectronics.js";
//import mathematics from "../cources/mathematics.js";
const informationEngineering = "数理・情報システム学科（情報工学コース）";

describe("splitCredit()", () => {
  it("splitCredit test 1", () => {
    expect(
      splitCredit(
        initialState,
        [
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "情報数学Ｉａ",
            "2",
            "2017",
            "前期",
            "良",
            "合"
          ]
        ],
        {
          artCulture: 2,
          educationOthers: 6,
          english: 4,
          foreignLanguage: 4,
          freeFirst: 10,
          freeSecond: 6,
          informationScience: 2,
          science: 4,
          social: 4,
          specialCompulsory: 62,
          specialFree: 0,
          specialFundamental: 12,
          specialOptional: 8
        },
        {
          required: [
            "情報数学Ｉａ",
            "情報数学Ｉｂ",
            "情報数学III",
            "コンピュータセキュリティ",
            "記号論理学",
            "データベースの設計と開発",
            "アルゴリズムとデータ構造",
            "計算機アーキテクチャI",
            "計算機アーキテクチャII",
            "オペレーティングシステム",
            "コンピュータネットワーク",
            "プログラミング言語と処理系",
            "ソフトウェア工学",
            "コンピュータサイエンス基礎",
            "情報と産業・社会",
            "情報システムと職業倫理",
            "Ｃプログラミング応用演習",
            "ＪＡＶＡプログラミング演習",
            "計算機工学実験Ａ",
            "計算機工学実験Ｂ",
            "基礎データ構造演習",
            "システム創成プロジェクトI",
            "システム創成プロジェクトII",
            "システム創成プロジェクトIII",
            "コンピュータサイエンス講究",
            "コンピュータサイエンス研究実習",
            "情報処理演習",
            "卒業研究"
          ]
        },
        informationEngineering
      )
    ).toEqual({
      artCulture: 0,
      artCultureLesson: [],
      educationOthers: 0,
      educationOthersLesson: [],
      english: 0,
      englishLesson: [],
      foreignLanguage: 0,
      foreignLanguageLesson: [],
      freeFirst: 0,
      freeFirstLesson: [],
      freeSecond: 0,
      freeSecondLesson: [],
      informationScience: 0,
      informationScienceLesson: [],
      isSelected: true,
      science: 0,
      scienceLesson: [],
      social: 0,
      socialLesson: [],
      specialCompulsory: 2,
      specialCompulsoryLesson: ["情報数学Ｉａ"],
      specialFree: 0,
      specialFreeLesson: [],
      specialFundamental: 0,
      specialFundamentalLesson: [],
      specialOptional: 0,
      specialOptionalLesson: [],
      surplusCredit: 0,
      surplusCreditLesson: [],
      acquiredCredit: 2
    });
  });
  /*
  it("splitCredit test 2", () => {
    expect(
      splitCredit(
        initialState,
        [
          [
            "教養育成科目",
            "入門科目",
            "自然科学",
            "通信と情報",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "自然科学",
            "エレクトロニクスのはなし",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "学際",
            "グローバル・イシュー：国際社会が抱える課題と対応",
            "2",
            "2016",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "記号論理学",
            "2",
            "2016",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "データベースの設計と開発",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "応用情報学特論Ｉ",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "情報数学Ｉｂ",
            "2",
            "2016",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "アルゴリズムとデータ構造",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "オペレーティングシステム",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "コンピュータネットワーク",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "ソフトウェア工学",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "計算機科学特論II",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "計算機アーキテクチャI",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "計算機アーキテクチャII",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "マルチメディア工学",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "オートマトンと計算理論",
            "2",
            "2017",
            "後期",
            "-",
            "否"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "情報と産業・社会",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "コンピュータサイエンス基礎",
            "2",
            "2016",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "マルチメディア演習",
            "2",
            "2018",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "情報システムと職業倫理",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "ＪＡＶＡプログラミング演習",
            "2",
            "2016",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "Ｃプログラミング応用演習",
            "2",
            "2016",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "情報処理演習",
            "1",
            "2016",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "コンピュータサイエンス講究",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "数学要論IIＢ",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "専門基礎科目",
            "---",
            "微分積分学ＩＢ",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "専門教育科目",
            "専門基礎科目",
            "---",
            "微分積分学IIＢ",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "自然科学",
            "実用微分積分学ⅠＢ",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "自然科学",
            "実用微分積分学ⅡＢ",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "自然科学",
            "実用線形代数学ⅠＢ",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "自然科学",
            "実用線形代数学ⅡＢ",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "学際",
            "スタートアップセミナーＡ",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "発展科目",
            "自然科学",
            "Ｒｕｂｙプログラミング",
            "2",
            "2018",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "発展科目",
            "学際",
            "島根学",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "人文社会科学",
            "現代経済へのアプローチ",
            "2",
            "2016",
            "後期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "入門科目",
            "人文社会科学",
            "情報化社会と経済",
            "2",
            "2016",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "発展科目",
            "自然科学",
            "開発フレームワーク",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "発展科目",
            "学際",
            "mrubyプログラミング",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "教養育成科目",
            "社会人力養成科目",
            "---",
            "日本国憲法",
            "2",
            "2016",
            "前期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "英語",
            "英語IIIＡ",
            "1",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "英語",
            "英語IIIＢ",
            "1",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "英語",
            "英語ＩＡ",
            "1",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "英語",
            "英語ＩＢ",
            "1",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "英語",
            "英語IIＡ",
            "1",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "英語",
            "英語IIＢ",
            "1",
            "2018",
            "前期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "韓国・朝鮮語",
            "韓国・朝鮮語Ｉ",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "韓国・朝鮮語",
            "韓国・朝鮮語II",
            "1",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "外国語科目",
            "韓国・朝鮮語",
            "韓国・朝鮮語II",
            "1",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "文化・芸術",
            "---",
            "芸術文化Ⅰ",
            "2",
            "2017",
            "後期",
            "-",
            "合"
          ],
          [
            "基礎科目",
            "情報科学",
            "---",
            "情報科学",
            "2",
            "2017",
            "前期",
            "-",
            "合"
          ]
        ],
        {
          artCulture: 2,
          educationOthers: 6,
          english: 4,
          foreignLanguage: 4,
          freeFirst: 10,
          freeSecond: 6,
          informationScience: 2,
          science: 4,
          social: 4,
          specialCompulsory: 62,
          specialFree: 0,
          specialFundamental: 12,
          specialOptional: 8
        },
        [
          "情報数学Ｉａ",
          "情報数学Ｉｂ",
          "情報数学III",
          "コンピュータセキュリティ",
          "記号論理学",
          "データベースの設計と開発",
          "アルゴリズムとデータ構造",
          "計算機アーキテクチャI",
          "計算機アーキテクチャII",
          "オペレーティングシステム",
          "コンピュータネットワーク",
          "プログラミング言語と処理系",
          "ソフトウェア工学",
          "コンピュータサイエンス基礎",
          "情報と産業・社会",
          "情報システムと職業倫理",
          "Ｃプログラミング応用演習",
          "ＪＡＶＡプログラミング演習",
          "計算機工学実験Ａ",
          "計算機工学実験Ｂ",
          "基礎データ構造演習",
          "システム創成プロジェクトI",
          "システム創成プロジェクトII",
          "システム創成プロジェクトIII",
          "コンピュータサイエンス講究",
          "コンピュータサイエンス研究実習",
          "情報処理演習",
          "卒業研究"
        ],
        informationEngineering
      )
    ).toEqual({
      artCulture: 2,
      artCultureLesson: ["芸術文化Ⅰ"],
      educationOthers: 6,
      educationOthersLesson: [
        "グローバル・イシュー：国際社会が抱える課題と対応",
        "実用微分積分学ⅠＢ",
        "実用微分積分学ⅡＢ"
      ],
      english: 4,
      englishLesson: ["英語IIIＡ", "英語IIIＢ", "英語ＩＡ", "英語ＩＢ"],
      foreignLanguage: 4,
      foreignLanguageLesson: [
        "韓国・朝鮮語Ｉ",
        "韓国・朝鮮語II",
        "韓国・朝鮮語II"
      ],
      freeFirst: 10,
      freeFirstLesson: [
        "実用線形代数学ⅠＢ",
        "実用線形代数学ⅡＢ",
        "スタートアップセミナーＡ",
        "Ｒｕｂｙプログラミング",
        "島根学"
      ],
      freeSecond: 6,
      freeSecondLesson: [
        "開発フレームワーク",
        "mrubyプログラミング",
        "日本国憲法"
      ],
      informationScience: 2,
      informationScienceLesson: ["情報科学"],
      isSelected: true,
      science: 4,
      scienceLesson: ["通信と情報", "エレクトロニクスのはなし"],
      social: 4,
      socialLesson: ["現代経済へのアプローチ", "情報化社会と経済"],
      specialCompulsory: 31,
      specialCompulsoryLesson: [
        "記号論理学",
        "データベースの設計と開発",
        "情報数学Ｉｂ",
        "アルゴリズムとデータ構造",
        "オペレーティングシステム",
        "コンピュータネットワーク",
        "ソフトウェア工学",
        "計算機アーキテクチャI",
        "計算機アーキテクチャII",
        "情報と産業・社会",
        "コンピュータサイエンス基礎",
        "情報システムと職業倫理",
        "ＪＡＶＡプログラミング演習",
        "Ｃプログラミング応用演習",
        "情報処理演習",
        "コンピュータサイエンス講究"
      ],
      specialFree: 0,
      specialFreeLesson: [],
      specialFundamental: 4,
      specialFundamentalLesson: ["微分積分学ＩＢ", "微分積分学IIＢ"],
      specialOptional: 12,
      specialOptionalLesson: [
        "数学要論IIＢ",
        "応用情報学特論Ｉ",
        "計算機科学特論II",
        "マルチメディア工学",
        "オートマトンと計算理論",
        "マルチメディア演習"
      ],
      surplusCredit: 2,
      surplusCreditLesson: ["英語IIＡ", "英語IIＢ"]
    });
  });
  */

  it("splitCredit test 3 (システムコース・システム創成取得済）", () => {
    expect(
      splitCredit(
        initialState,
        [
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "システム創成プロジェクトI",
            "2",
            "2018",
            "前期",
            "秀",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "システム創成プロジェクトII",
            "2",
            "2018",
            "前期",
            "秀",
            "合"
          ],
          [
            "専門教育科目",
            "数理・情報システム学科開講科目",
            "---",
            "システム創成プロジェクトIII",
            "2",
            "2018",
            "前期",
            "秀",
            "合"
          ]
        ],
        {
          artCulture: 2,
          educationOthers: 6,
          english: 4,
          foreignLanguage: 4,
          freeFirst: 10,
          freeSecond: 6,
          informationScience: 2,
          science: 4,
          social: 4,
          specialCompulsory: 62,
          specialFree: 0,
          specialFundamental: 12,
          specialOptional: 8
        },
        {
          required: [
            "情報数学Ｉａ",
            "情報数学Ｉｂ",
            "情報数学III",
            "コンピュータセキュリティ",
            "記号論理学",
            "データベースの設計と開発",
            "アルゴリズムとデータ構造",
            "計算機アーキテクチャI",
            "計算機アーキテクチャII",
            "オペレーティングシステム",
            "コンピュータネットワーク",
            "プログラミング言語と処理系",
            "ソフトウェア工学",
            "コンピュータサイエンス基礎",
            "情報と産業・社会",
            "情報システムと職業倫理",
            "Ｃプログラミング応用演習",
            "ＪＡＶＡプログラミング演習",
            "計算機工学実験Ａ",
            "計算機工学実験Ｂ",
            "基礎データ構造演習",
            "システム創成プロジェクトI",
            "システム創成プロジェクトII",
            "システム創成プロジェクトIII",
            "コンピュータサイエンス講究",
            "コンピュータサイエンス研究実習",
            "情報処理演習",
            "卒業研究"
          ]
        },
        informationEngineering
      )
    ).toEqual({
      artCulture: 0,
      artCultureLesson: [],
      educationOthers: 0,
      educationOthersLesson: [],
      english: 0,
      englishLesson: [],
      foreignLanguage: 0,
      foreignLanguageLesson: [],
      freeFirst: 0,
      freeFirstLesson: [],
      freeSecond: 0,
      freeSecondLesson: [],
      informationScience: 0,
      informationScienceLesson: [],
      isSelected: true,
      science: 0,
      scienceLesson: [],
      social: 0,
      socialLesson: [],
      specialCompulsory: 6,
      specialCompulsoryLesson: [
        "システム創成プロジェクトI",
        "システム創成プロジェクトII",
        "システム創成プロジェクトIII"
      ],
      specialFree: 0,
      specialFreeLesson: [],
      specialFundamental: 0,
      specialFundamentalLesson: [],
      specialOptional: 0,
      specialOptionalLesson: [],
      surplusCredit: 0,
      surplusCreditLesson: [],
      acquiredCredit: 6
    });
  });
});
