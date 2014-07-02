---
title: Meer over meldingen
date: 2014-07-02 12:00 UTC
tags:
---

Onze iPhones trillen; een bericht op *Slack*, onze bedrijfsmatige *WhatsApp*. Het bericht leest: “deployment started”. Gevolgd door: “deployment successful”. Dit laatste, geautomatiseerde bericht is een leuk moment. Dit betekent namelijk dat [Domici.ly](http://domici.ly) geüpdate is.

In [De geboorte van een webapplicatie](http://domicily/blog) hebben wij de feature meldingen kort genoemd.  Een eigenaar moet een probleem kunnen melden en deze melding moet toegewezen kunnen worden aan een persoon, bijvoorbeeld de huismeester.

De afgelopen week hebben wij veel tijd besteed aan het verbeteren van meldingen en nu is het resultaat daar. Zowel de look als ook de functionaliteit is verbeterd.

Hieronder gaan wij wat dieper in op deze feature en zullen wij toelichten waarom een melding eruit ziet zoals deze er nu uitziet. Hieraan zijn heel wat cycli van updates vooraf gegaan.

![screenshot melding](/images/Screenshotmelding.png)

 Als je na het lezen ideëen of suggesties hebt, dan kan je ons altijd [mailen](mailto:roderick@domici.ly)!

## Componenten van een melding 

Een melding is een ding dat bepaalde informatie moet (kunnen) bevatten, maar welke?

De basis is de naam van de melding met daaronder een omschrijving ervan. Door de naam ziet de gebruiker meteen waarover de melding gaat. De omschrijving geeft uitleg en meer details. 

Enige metadata is handig om te tonen. Metadata is data over data. Bijvoorbeeld wie de maker is, het tijdstip waarop het gemaakt is en wanneer er iets aan toegevoegd of gewijzigd is.

Vervolgens moet de melding kunnen worden toegewezen aan iemand, zodat diegene daarop actie kan ondernemen. 

Naar gelang actie wordt ondernomen kan de melding van status veranderen. Een melding gaat van “nieuw”, naar “in behandeling” en is uiteindelijk “klaar”. 

## Communicatie omtrent een melding

De maker van de melding en de toegewezene worden automatisch per email op de hoogte gehouden van aanpassingen van de melding. Omdat deze informatie ook relevant kan zijn voor anderen, kunnen derden “deelnemen” aan de melding. Alle deelnemers ontvangen emailnotificaties over deze meldingen, waardoor zij op de hoogte blijven.

Onder iedere melding kunnen gebruikers vragen stellen of opmerkingen plaatsen met betrekking tot die melding. Deelnemers aan deze discussie ontvangen eveneens emailnotificaties. Hierdoor worden gebruikers erbij betrokken en blijft de discussie gebonden aan de melding.

## Foto’s bij een melding

Van onze gebruikers kregen wij te horen dat zij graag foto’s bij een melding willen kunnen voegen, bijvoorbeeld van een schade. Feedback nemen wij ten harte en daarom gaan wij het mogelijk maken bestanden te uploaden. Vanaf volgende week kunnen documenten en foto’s aan een melding gehangen worden. 

## Ordening van meldingen

Het totaal aantal meldingen kan snel oplopen. Daardoor zien wij noodzaak ordening in de vele meldingen aan te brengen. Onderscheid op basis van de statussen “nieuw”, “in behandeling” en “klaar” is niet genoeg.

De eerste stap hebben wij gezet met de toevoeging van “labels” en de mogelijkheid hierop te filteren. Tevens kan er gefilterd worden op maker en toegewezene. Daarnaast zit er een zoekfunctie in die op alle woorden van een melding zoekt.

Om verder structuur aan te brengen in alle meldingen en ervoor te zorgen dat geen melding op “nieuw” blijft staan gaan wij niet alle meldingen meteen zichtbaar laten zijn voor iedereen. 

Over de ordening van meldingen zullen wij meer vertellen zodra wij het bericht “deployment successful” voor de betreffende update hebben ontvangen.

<br />
