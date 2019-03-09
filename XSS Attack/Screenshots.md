# Security Karen en Tibo

## Inleiding
In dit bestand zal het gaan over een XSS attack, specifieker over een DOM XSS. In het voorbeeld zal de site [Juice Shop](https://juice-shop.herokuapp.com/) gebruikt worden. We hebben gekozen voor deze site omdat deze bedoelt is om te hakken en het dus niet illegaal is.

## Uitvoering

Eerst zal er moeten worden ingelogd op de site. Om uw eigen identiteit niet vrij te geven, is het gemakkelijk om een user aan te maken die niet op uw e-mail staat. Bovendien moet de account niet worden geactiveerd, dus dat maakt het gemakkelijker om een niet bestaande email te gebruiken.

![UserAanmaken](images/UserAanmaken.png)
Afbeelding 1: aanamken van een gebruiker

![Inloggen](images/Inloggen.png)
Afbeeling 2: inloggen

Eens er ingelogd is, kom je op onderstaande pagina. Dit is de pagina waar we de attack zullen gaan uitvoeren.

![Home](images/Home.png)
Afbeelding 3: homepagina

Bovenaan het scherm staat er een zoekbalk die we gaan gebruiken voor de DOM XSS attack. Deze balk is echter bedoelt voor het opzoeken van de verschillende producten wat wil zeggen dat deze in contact is met de databank. 
In deze zoekbalk kunnen we het onderstaande commando uitvoeren.

```
<iframe src="javascript:alert(`xss`)">
```

## Output
Als het commando juist is uitgevoerd, zou er een pop-up scherm moeten verschijnen. Als er geen pop-up verschijnt, zal er ergens iets mis zijn gelopen. In de onderstaande afbeelding kan u zien dat onze attack wel degelijk is gelukt.

![Output](images/output.png)
Afbeelding 4: XSS pop-up venster

In onderstaande screenshot kunnen we zien wat de code net heeft gedaan met de site. Omdat we gebruik hebbe, gemaakt van een iframe, zal deze ook verschijnen in de pagina zelf.

![Impact](images/impact.png)
Afbeelding 5: impact op de site
