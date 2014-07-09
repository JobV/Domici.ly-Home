# Stappenplan

1. Maak een blog, zie hieronder
2. Deploy blog
3. Deel op Facebook
4. Deel op Twitter
5. Verstuur naar lijsten met Mailchimp

# Elke keer

open terminal
ga naar de juiste folder met:

```
cd Domici
```


overzicht folders:

```
ls
```


zorg ervoor dat je in de master branch bent

```
git checkout master
```


als dit niet lukt, zijn er misschien nog on-opgeslagen bestanden. Je kan alles snel weggooien met:

```
git checkout .
```


haal de laatste code op:

```
git pull
```


open alle files met sublime text

```
sdf .
```


start de middleman server

```
middleman server
```


open een nieuw terminal tab met CMD+T en ga weer naar de folder.
Je kan tegelijk in Chrome naar het volgende adres gaan, daar moet je de site zien:

```
localhost:4567
```


# nieuw blog entry

```
middleman article TITLE
```

Nu zie je in Sublime onder blog/ een nieuwe, lege blog ding.

Schrijf je blog post. Geef je titel op in het bovenste stukje.

Als je klaar bent en hebt opgeslagen, check de veranderingen in git:

```
git status
```

Klopt het? Commit het dan:

```
git add .
git commit -m 'hier wat je hebt gepost'
git push
```

Nu staat het op GitHub, maar nog niet op de server. Daarvoor moet je naar Heroku pushen:

Eerste keer:

```
git remote add hu git@heroku.com:domcili-landing.git
```

En altijd:

```
git push hu master
```

