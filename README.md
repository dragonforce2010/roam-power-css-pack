# Power CSS Pack

This extension added a lot of useful css utilities to further enrich your roam experience. It's easy to use, you just need to put the specific tag in your block, then the corresponding styles will be applied. 

There are 16 colors(`navy`,`blue`,`aqua`,`teal`,`olive`,`green`,`lime`,`yellow`,`orange``red`,`fuchsia`,`purple`,`maroon`,`silver`,`gray`,`black`) predefined in the extension, which can be used in any css styles tag provided by this extension. 


Below are some examples to demonstrate how to use this extension and how the block is rendered. `Roam Notes Content` is how you write notes your roam blocks with the specific css tags, `Render Results` is the final effect of applying the specific css tag from this extension.

## Border Styles Examples
This extension provides 6 of different boarder styles for rendering, all 6 border styles are not regular, it's kinda have some art style, to make your roam more sophisticated
### Roam Notes Content
- Border Styles Examples #.rm-level-bg
    - Border 1 #.rm-border-1
    - Border 2 #.rm-border-2
    - Border 3 #.rm-border-3
    - Border 4 #.rm-border-4
    - Border 5 #.rm-border-5
    - Border 6 #.rm-border-6

### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FTtcpHtlvgS.png?alt=media&token=060d7997-c48a-40d6-ac0b-ffebee22af2a)

## Content Level Font Color Examples
If you want to have different colors for different roam block level, then below is how this extension helps you with that.
Note: the color is predefined, not support for configuration in roam plugin panel settings, but you can customize it in your [[roam/css]]
### Roam Notes Content
- **Content Level Font Color Examples**
    - level1
        - level2
            - level3
                - level4
                    - level5
                        - level6 #.rm-font-yellow
### Render Result
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fj2BCjw8Unw.png?alt=media&token=14f3347a-8f90-4ee9-8837-9cf1844ac520)


## Content Level Backgroun Color Examples
Similar to the above, if you want to have different backgroun colors for different roam block level, than below shows how to do it. You just need to put `#.rm-level-bg` in the roam block，then this block and its children block will be rendered with different background colors in different levels.
Note: this background color for different level is predefined, not support for configuration in roam plugin panel settings, but you can customize it in your [[roam/css]]
### Roam Notes Content
- **Content Level Background Examples**
    - level1 background with color#.rm-level-bg #.rm-font-black
        - level2 background with color
            - level3 background with color
                - level4 background with color
                    - level5 background with color
                        - level6 background with color #.rm-font-yellow
                            - level7 background with color
                                - level8 background with color
                                    - level9 background with color
                                        - level10 background with color

### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F3AaWAG2JqM.png?alt=media&token=efc2d71c-3191-42d5-8647-7493b54c858c)


## Block Background Color Examples
If you want to render a block with specific background color(only block itself, children block will not be affected), you can use `#.rm-bg-orange-100` tag, you can use any other predefined colors to replace `orange` in the tag. `100` stands for color opacity, you have 6 opacity(`100`, `200`, `300`, `400`, `500`, `600`) to use
### Roam Notes Content
- level10 background with color
- Block Background Examples #.rm-font-white
    - Yellow Background 100 #.rm-bg-orange-100
    - Yellow Background 200 #.rm-bg-orange-200
    - Yellow Background 300 #.rm-bg-orange-300
    - Yellow Background 400 #.rm-bg-orange-400
    - Yellow Background 500 #.rm-bg-orange-500
    - Teal Background 100 #.rm-bg-teal-100 
    - Teal Background 200 #.rm-bg-teal-200
    - Teal Background 300 #.rm-bg-teal-300
    - Teal Background 400 #.rm-bg-teal-400
    - Teal Background 500 #.rm-bg-teal-500
    - Teal Background 600 #.rm-bg-teal-600
    - Olive Background 100 #.rm-bg-olive-100 
    - Olive Background 200 #.rm-bg-olive-200
    - Olive Background 300 #.rm-bg-olive-300
    - Olive Background 400 #.rm-bg-olive-400
    - Olive Background 500 #.rm-bg-olive-500
    - Olive Background 600 #.rm-bg-olive-600

### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F_jlqJRunQL.png?alt=media&token=22591613-ba8c-4b04-80f9-787f5d191d35)
## Font Styles Examples
You have three kinds of tags to control the font.
`#.rm-font-orange`: control the color of the font, you have 16 colors to choose from.
`#.rm-font-family-fantasy`: control the font family of the font, there are 13 font families(`serif, sans-serif, monospace, cursive, fantasy, system-ui, ui-serif, ui-sans-serif, ui-monospace, ui-rounded, emoji, math, fangsong`) are available for you to use. 
`#.rm-font-20px`: control the font size, you can set the font size between 12 and 72
### Roam Notes Content
- Font Examples
    - font color is orange and font family is fantasy, font size is 32 #.rm-font-orange #.rm-font-family-fantasy #.rm-font-32px
    - font color is maroon and font family is ui-serif #.rm-font-maroon, font size is 28 #.rm-font-family-ui-serif #.rm-font-28px
    - font color is blue and font family is ui-monospace, font size is 20 #.rm-font-blue #.rm-font-family-ui-monospace #.rm-font-20px
    - font color is orange and font family is fantasy, font size is 18 #.rm-font-orange #.rm-font-family-fantasy #.rm-font-18px
    - font color is orange and font family is fantasy #.rm-font-family-fantasy, font size is 14 #.rm-font-teal #.rm-font-14px

### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FI0o57NNDCp.png?alt=media&token=1bb4416f-dba7-4cc5-a8eb-cdf2aa8177b7)

## Box Styles Examples
You can add a border to your roam block and specify the alignment fo the content by simply adding this tag `#.rm-box-orange-right`. 
- `orange` stands for the box border color, you can set any of above predefined 16 colors.
- `right`  stands for the box border content alignment, you can set the alignment to one of these `left, start, center, end, right`
### Roam Notes Content
- Box Examples #.rm-grid3
    - box orange right #.rm-box-orange-right
        - box1
        - box2
    - box orange center #.rm-box-orange-center
        - box1
        - box2
    - box orange left #.rm-box-orange-start
        - box1
        - box2
    - box teal left #.rm-box-teal-start
        - box1
        - box2
    - box teal center #.rm-box-teal-center
        - box1
        - box2
    - box teal right #.rm-box-teal-right
        - box1
        - box2
    - box yellow left #.rm-box-yellow-start
        - box1
        - box2
    - boxyellowteal right #.rm-box-purple-right
        - box1
        - box2
    - box yellow center #.rm-box-navy-center
        - box1
        - box2

### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FYU7cjnBOIb.png?alt=media&token=2219d9cc-1f93-4682-928f-5b5c910106dd)

## Grid Layout Examples
This is what I like the most, layout style tags really give you the freedom to further customize you roam notes. You can have more layout options to rearrange your blocks to have a better visual effect.
`#.rm-grid2`: `2` stands for how many blocks are there in one row, the option values are as follows: `2, 3, 4, 5, 6`
### Two Columns
#### Roam Notes Content
- **Tow Columns** #.rm-grid2 #.rm-font-black#.rm-level-bg
    - Column1 #.rm-font-orange 
    - Column2
    - Column3
    - Column4
    - Column5
    - Column6
    - Column7
    - Column8   
    - Column9 
    - Column10

#### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FONYhza1Ip-.png?alt=media&token=a0360d79-bfd9-41fd-9422-b9c22bc92982)

### Three Columns
#### Roam Notes Content
- **Three Columns** #.rm-grid3 #.rm-level-bg #.rm-font-maroon
    - Column2
    - Column1 #.rm-font-orange 
    - Column4
    - Column3
    - Column5
    - Column6
    - Column8
    - Column7
    - Column10
    - Column9 

#### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FMs-pJ-PUta.png?alt=media&token=c3ce2d40-8f89-4f3b-8ba1-64836380dcc3)

### Four Columns
#### Roam Notes Content
- **4 Columns** #.rm-grid4 #.rm-level-bg #.rm-font-navy
    - Column2
    - Column1 
    - Column4
    - Column3
    - Column5
    - Column6
    - Column8
    - Column7
    - Column10
    - Column9 

#### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fge0elSPvBY.png?alt=media&token=2e9d3368-9b86-4dc6-aafa-d001d7a80fc7)

### Column with fixed Column width and auto layout
Sometimes you don't know how many columns should be set in one row, but you do know what is the mininum width of each column, then you can use this layout style tag `.rm-grid-auto-100px`
- `100px` stands for the mininum width of the column
- There are 15 predefined column widths(`100px, 150px, 200px, 250px, 300px, 350px, 400px, 450pxl, 500px, 550px, 600px, 650px, 700px, 750px, 800px`) for you to use. 
#### Roam Notes Content
- **Column with fixed Column width and auto layout** #.rm-level-bg #.rm-font-black
    - Fixed column width 100px #.rm-grid-auto-100px
        - Column2
        - Column1 #.rm-font-orange 
        - Column4
        - Column3
        - Column5
        - Column6
        - Column8
        - Column7
        - Column10
        - Column9 
    - Fixed column width 150px #.rm-grid-auto-150px
        - Column2
        - Column1 #.rm-font-orange 
        - Column4
        - Column3
        - Column5
        - Column6
        - Column8
        - Column7
        - Column10
        - Column9 
    - Fixed column width 200px #.rm-grid-auto-200px
        - Column2
        - Column1 #.rm-font-orange 
        - Column4
        - Column3
        - Column5
        - Column6
        - Column8
        - Column7
        - Column10
        - Column9 
    - Fixed column width 300px #.rm-grid-auto-300px
        - Column2
        - Column1 #.rm-font-orange 
        - Column4
        - Column3
        - Column5
        - Column6
        - Column8
        - Column7
        - Column10
        - Column9 

#### Render Results
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FxVH8wGOFnn.png?alt=media&token=e78fbf25-a451-4cfc-b7d9-a1a4d5444ad7)

## Support This Project
If this extension has been helpful to you, please consider making a donation to support my work. Your contribution helps me continue to develop and maintain the extension for the community.
PayPal donation link: https://www.paypal.com/paypalme/codingmonkey