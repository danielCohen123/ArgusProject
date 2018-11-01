{\rtf1\ansi\ansicpg1252\cocoartf1671
{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 HelveticaNeue-Bold;\f2\fswiss\fcharset0 ArialMT;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red25\green25\blue25;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c12941\c12941\c12941;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\}.}{\leveltext\leveltemplateid1\'02\'00.;}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\})}{\leveltext\leveltemplateid101\'02\'00);}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid2}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs22 \cf2 \expnd0\expndtw0\kerning0
\
\pard\pardeftab720\rtlpar\partightenfactor0

\f1\b \cf2 Example of running:\
\pard\tx220\tx720\pardeftab720\li720\fi-720\partightenfactor0
\ls1\ilvl0
\f2\b0 \cf3 \kerning1\expnd0\expndtw0 {\listtext	1.	}
\f1\b \expnd0\expndtw0\kerning0
First run:
\f0\b0 \uc0\u8232 curl -X POST -H "Content-Type: application/json" -d '\{"something": "blabla"\}' http://3.120.140.88:80/api/resource\
\pard\tx220\tx720\pardeftab720\li720\fi-720\partightenfactor0
\ls1\ilvl0
\f2 \cf3 \kerning1\expnd0\expndtw0 {\listtext	2.	}
\f1\b \expnd0\expndtw0\kerning0
And then run:
\f0\b0 \uc0\u8232 curl http://52.29.47.55:80/api/resource\
\ls1\ilvl0
\f2 \kerning1\expnd0\expndtw0 {\listtext	3.	}
\f1\b \expnd0\expndtw0\kerning0
Will print:
\f0\b0 \uc0\u8232 \{"something": \'93blabla"\}\
\pard\pardeftab720\partightenfactor0
\cf3 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf3 Docker example run command:\
\pard\tx20\tx360\pardeftab720\li360\fi-360\partightenfactor0
\ls2\ilvl0\cf3 \kerning1\expnd0\expndtw0 {\listtext	1)	}\expnd0\expndtw0\kerning0
docker build -t getserver .  : 
\f0\b0 create docker image, -t Docker image\'92s name
\f1\b \
\ls2\ilvl0\kerning1\expnd0\expndtw0 {\listtext	2)	}\expnd0\expndtw0\kerning0
docker run -p 80:80 getserver : 
\f0\b0 run gerserver, -p mapping machine's port 80 to container\'92s port 80 (localhost). 
\f1\b \
\pard\pardeftab720\partightenfactor0
\cf3 \
\
\pard\pardeftab720\partightenfactor0

\f0\b0 \cf3 \
\pard\pardeftab720\sl400\partightenfactor0

\f1\b \cf2 Decisions I made:\
\pard\pardeftab720\sl400\partightenfactor0

\f0\b0 \cf2 Why I chose javascript?\
I am familiar with it and it\'92s easy to build quick and efficient HTTP server.\uc0\u8232 Also, the Node JS community is active and supportive, and its easy to find answers and references on the web.\u8232 Why I used fetch?\
I am familiar with the notion of asynchronous fetch and I learned about it in IDC Herzliya.}