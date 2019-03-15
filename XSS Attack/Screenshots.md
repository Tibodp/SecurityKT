# Security Karen and Tibo

## Intro
In this file we're going to work out an XSS attack, more specific an DOM XSS attack. In this example we're going to use the website of [The Juice Shop](https://juice-shop.herokuapp.com/). We choose this site because hacking is illegal, but this site is made for people who want to practice or lean how to hack.

## Executing

First we need to login on the site. We don't want to reveal our own identity, so we're going to use a e-mail that doesn't exist. In this site, using an unexisting e-mail is easy because the site won't send a verification e-mail. The site also makes no use of checking the email on correctness.

![UserAanmaken](images/UserAanmaken.png)
Image 1: Making a user

![Inloggen](images/Inloggen.png)
Image 2: Logging in

Once we are logged in into the site, the following page will apear. This is were we will attack. 

![Home](images/Home.png)
Image 3: Homepage

On the top of the screen you can see a searchbar which we are going to use for our DOM XSS attack. This bar is used for searching diffrent items in the store, this means the bar is in direct contact with a database. A connection is needed to do this attack.

In this searchbar we execute the following attack.

```
<iframe src="javascript:alert(`xss`)">
```

## Output

If the command is executed in the right way, you should get a pop-up. If the pop-up doesn't appear, something went wrong. In the following image you can see that our attack is succesfull complete.


![Output](images/output.png)
Image 4: XSS pop-up

In the following screenshot we can see what our attack did to the site. Because we used an iframe, we can see one at the result page.

![Impact](images/impact.png)
Image 5: Impact on site
