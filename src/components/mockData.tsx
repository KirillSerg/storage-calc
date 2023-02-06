export const colors = {
  backblaze: "red",
  bunny: "orange",
  scaleway: "purple",
  vultr: "skyblue",
}

export const services = [
  {
    id: 1,
    name: "backblaze",
    icon: "https://www.backblaze.com/blog/wp-content/uploads/2017/12/backblaze_icon_transparent.png",
    price: {
      min: 7,
      max: null,
      storage: {
        hdd: 0.005,
        ssd: 0.005,
        multi: {
          multiprice: 0.005,
          bonus: null,
        },
        singl: {
          singlprice: 0.005,
          bonus: null,
        },
      },
      transfer: {
        hdd: 0.01,
        ssd: 0.01,
        multi: {
          multiprice: 0.01,
          bonus: null,
        },
        singl: {
          singlprice: 0.01,
          bonus: null,
        },
      },
    },
  },
  {
    id: 2,
    name: "bunny",
    icon: 'data:image/jpeg;base64,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',
    price: {
      min: null,
      max: 10,
      storage: {
        hdd: 0.01,
        ssd: 0.02,
        multi: {
          multiprice: null,
          bonus: null,
        },
        singl: {
          singlprice: null,
          bonus: null,
        },
      },
      transfer: {
        hdd: 0.01,
        ssd: 0.01,
        multi: {
          multiprice: null,
          bonus: null,
        },
        singl: {
          singlprice: null,
          bonus: null,
        },
      },
    },
  },
  {
    id: 3,
    name: "scaleway",
    icon: 'https://avatars.githubusercontent.com/u/5185491?s=200&v=4',
    price: {
      min: null,
      max: null,
      storage: {
        hdd: 0.03, // null
        ssd: null,
        multi: {
          multiprice: 0.06,
          bonus: 75,
        },
        singl: {
          singlprice: 0.03,
          bonus: 75,
        },
      },
      transfer: {
        hdd: null,
        ssd: null,
        multi: {
          multiprice: 0.02,
          bonus: 75,
        },
        singl: {
          singlprice: 0.02,
          bonus: 75,
        },
      },
    },
  },
  {
    id: 4,
    name: "vultr",
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABAlBMVEX///8Ae/xRuf/I9P////v///0Be/gAev1RufydyPvH9f3L8/7N9v2Z3f1Ht/7n+v4YiPoAdf3///cAdfYAeP38//z//Pv5//4Ae/X///QAdPj3////+f0Ad/UAcfvz/v8AgPlSvv7//+8Acuz/+vPU6/eu0vv1+vTb9/vz+v9KnvVUpvXM5fsQeesng+nx//Y+k/bK7/+93PuIwvaIuPiqz/Dh7v217/yi4vxysfyD0vthvfWy4fgghvzZ9vV4uf12w/Oo6fxrwPuU0PXA5/0tmfgkk/w0pvxbpf1jq+81iuTS5Pyg0+07kuRkq+tSmPWUxvOtxfq41u2CsvEAbf50qvxtBEsqAAAJP0lEQVR4nO2c+1vaSBfHE50Lgq8hk5lJCAnECyAKimjZ2tW33W3X2u2+a7fd/v//yjvBrgoJZNbbgM/5/NDLU2PnyzlzbjPRsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4LX8j0NzwTS2KERPqHHDCSzEdIfcUcsHocWeh5dd3FbzaduTTrSh3KVWj5lr/TabXX5tFudZjl5z//DETd3cpqubw6k3K5stu18k2oEKy1t81d3nDzaXDXJfstZJlSiJuV1UoqYyZKZKXSRHLG87Ve36U2Cegsgtjm/KCHTHmpv7tarlSUyjmoD2BXyPx9yA4PKCE2V7/MIP2nOBh0hHhubdc0y0frsz30xlMrjsg1IkbDkNrFJO4xU1/OnlldilOuaChUNnZyH8dojSekUKAy8nZLIp8Z2IxK4Zwoc6OwvFqp5z6PThrFAm3Cbb5fr/nRM6tLccpzA+lNPD2q7KqvzpgA1douLXZTypM4fFXrCAM2rFeUm6qEUCmX1yvrc3Ew9qcfx2IUaGzDMdURMrEPLadSPlotr66v//T6P3N5XREoo9AS6IRrKgxPLRNeGlm7ao+Vyz+9KZVKG3NYKf185u9knpf+YTXWU5h4wxmF0ZMiZXNdGbD8rrRSKq3MopSyWTrLLBBbHTYM9RRyen74/AJT6uX1/76Zre6uzCOmjDYpU/3tbUiJjquS+Jj5zJ9RHT0lu+uregI33ik/zTqaU401cqIKqHajVzNS2dR3f9nQUljaOGP1rELUbvBAo7KJibvnzyzhnxLcfK2hMGWj5MicnIauuIaXpvW5155Vwj8x65tpmCl0VWXFNyy7Qn9rN1H9k13gqeNP4aojTUhE9XcbGjtxrPFDtguSAq15gc5WtEOV9g0IlEhWNtNtpiPxVydbuiHRvbIDna3IqyNmQCKydsT7DU2FG++z+1BaaLhNQw0julddE7Wp6tuk86uWRJX3V9KJxMQqUVMKdvy3XVihEuqpNtHQOAN/GLtpaWVz5UcJk4ty5s2fhcw2/Myp2gXxlBNCB46xoRsSbzbSwm1z47eLi+o8Ln47q+U8z4Yxmb8RCbHDITM2kmLIGfvgxyCN+zOhNo29gZPTDQt82ShwURJ/wtLY2NRH+EwZ8WOf2HROxKDpRCL85GfbKHnYSua6qfq2xFF1qTGJYsdSSfF8rhl+GIO77ZqP2USzJ1RJ/iok7uyPh9Dwi8G5d+plVuvnDU+ngrbp745EkyW0Wjvu7rljK8+SeNnpGBL3Y4WI/fHR1VEY294pnor6WKbDYbs/R2HyGZnJhdcIKfzo8K1bLHAc9b0PzJo0ogohKinOGbyFx+r/MKRuTJrEaz1P1f/xHDtco2LGgRAs8zwSVRLkPU1jGl50BTKqcLxKsc8pLeoRxjROcpKi9Htxqi+rMYn5h+fXk8VnrYDzednixihJ0MruKd/aOnVV0MwoDCg/NTJJnAYJtrZNucYElPbjy0zaxwIj5yCvxeD8PP9U4LlBddTcC7lGF0Q5abQxmppKIT9if0yf1KgSgvPw1Vb+qYABPic0KVaYDs6SEWLZBMcuyZQPEELcU2HiUCYXjE50sn66cG/fqmWrNzwKyMQ3oEFin49QzjTZELI78IrljYNJY5gT/iO8NjkhJoQ31pCR6Uw+na1hmIb7gs2YFtnu7x2Jpy9pyJoYqIRz+3hCGv87FLJptCa9A/Yl+1NFfK0TpfCYqWZ42lO3zrwkue2kOA17C5EpfoBVk+Ccq4ivIZFw3lP16KQDIr/G3no8uTUiOTZfy9xB+VxUe+8mVCcp2slVc0tMpgxmRdHogty6qXfRXRQHvUaqklrsuzoZQ30I8Rckp8YSNWzVXt2p4ONhzhDZKGq98ogWzFz+sSJJuv7UJkMYC7bvpjmHB8T2/vSZzCYVwwj2Xuf+wdgHr3IPdp3gOhx79rmjmsLFclMrbWe7Az2BKmUMcybEmA09lTNV7o+/Kq9dlHLmFiRQT6cXTiEHTsZC0kKsfeC6wfZgaLEIIxPn93MRKty8DamnU4K77reaiKbHE8hi3eFffw27SKUfI0eGxThV3tfIGOcx3R7WZE5KX0TnnGRIA53ChnB7YHAI+hDk9/kz7Gs4V03GibHjlofA/NY5SefUBSZMZ2/prby08TK95n+H9GtfGnaiM9II3D0mZIQXqb7WQXneFU10LsrwfqPNFqm41qMua1YrsLUuyqiQOvKXTuKOL310rDPlV+E0pt+FWLQCWwemkqLmzUPVQXSWUKEUQ817h7ZbbS5caaYFPtVJiqmnht8WqpPXBCHcrepekPUWahqjCUYYfdW7lUdjPqgz38p/LWNxURKtPU50Gn5CvFcsyjmQWmx8tINGHkmKFXKa2KS1Y/YM9F5ghNY8nYDKecIvTdz/fRDjPSU7V+mIm8zP/SQdO4Xt2sIcwPwLMOp5gW3r7EXab9aWUKGI2EnaBeqMF91vy9gLC7HTrHLS1xBIbW9kern3QIVHdObRopuHY3i4Znq59wTtK4mFbkqIqt1ML/WesFZV4yCD8qRxYnqp90Ra7Uaxl1IaNHqml3pPBPP3i4fgJGnsLV9N8wOMjtJT04KsH/zdW8JkMUbUmThu2LxgphGfbi1jTZPCrEj6F0Xnwvy8s3zNxQ3YQl/7BTkxHCIRLakNLczU4j/x2YUNpzT8joXRO7IPZ5TM7vZ5kpy3TC/woQjWnjOWIuHaskaZG2qSXc7eiI3BsiaKG6SKIiM7rzwl49cwRmZegH1svrg5WT+gNA5PDL0c+th0LuJqxoiEUjpwohdhQgt/zoujhPY/4B1r6SNNiqidZCtw1VJ8Eygy8QMTnoCaM1B5f/I6P6dVJ8r5wSfLCUZfw+kBceB+NfUjkp4CKT55U29khAMWLX0y/AdlKtaMyUT1xokjX5INlcQvd4u32I7bbPEuHz4I3Nm7bYUDSq4W5l2RxyJivdvSLSDxsg6fZhPV2cmtn26fLOHRbwGYie4g5OMbXzatLtg99UcC98IktglJr16+SIEqnr5veIQrjrdy3lx/AeDIGl71A3uvh7D/Mo3ImNxqjpoqDyL24pLFGGwt6u1tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4LH4PxU9xOIPsvOhAAAAAElFTkSuQmCC',
    price: {
      min: 5,
      max: null,
      storage: {
        hdd: 0.01,
        ssd: 0.01,
        multi: {
          multiprice: 0.01,
          bonus: null,
        },
        singl: {
          singlprice: 0.01,
          bonus: null
        },
      },
      transfer: {
        hdd: 0.01,
        ssd: 0.01,
        multi: {
          multiprice: 0.01,
          bonus: null,
        },
        singl: {
          singlprice: 0.01,
          bonus: null,
        },
      },
    },
  },
]