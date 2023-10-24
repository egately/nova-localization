

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/skeleton-nova-tool.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/skeleton-nova-tool)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Using this skeleton (remove this section after you have completed these steps)

This repo contains a skeleton to easily create Nova Tool packages. It contains a few niceties not present in the default Nova Tool scaffolding.

First clone this repo to your development machine and remove the `.git` directory. Next run `git init` to create another repo. Create a new repo on GitHub (or another source control saas) and point the origin remote of your cloned repo to the one you just created. Here's an example: `git remote add origin git@github.com:spatie/newly-created-repo.git`. Commit all files and push to master.

Next replace these variables in all files of your repo:
 - `Salah Elabbar` (example: 'Freek Van der Herten')
 - `egately` (example: 'freekmurze')
 - `developer@egate.ly` (example: 'freek@spatie.be')
 - `Novalocalization` (example: 'nova-tail-tool')
 - `Novalocalization` (example: 'A tool to tail the log')
 - `egately` (example: 'spatie')
 - `Egately` (example: 'Spatie')
 - `Novalocalization` (example: 'TailTool')
 
 Next run `composer install`, `yarn` and `yarn production`.
 
If you don't have a Nova app already head over the [nova installation instructions](https://nova.laravel.com/docs/1.0/installation.html#installing-nova).

To use your customized package in a Nova app, add this line in the `require` section of the `composer.json` file:
 
 ```
    "egately/Novalocalization": "*",
```
 
 In the same `composer.json` file add a `repositiories` section with the path to your package repo:
 
 ```
     "repositories": [
         {
             "type": "path",
             "url": "../Novalocalization"
         },
```
 
Now you're ready to develop your package inside a Nova app.
 
**When you are done with the steps above delete everything above!**

# Novalocalization

[![Latest Version on Packagist](https://img.shields.io/packagist/v/egately/Novalocalization.svg?style=flat-square)](https://packagist.org/packages/egately/Novalocalization)
![CircleCI branch](https://img.shields.io/circleci/project/github/egately/Novalocalization/master.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/egately/Novalocalization/master.svg?style=flat-square)](https://travis-ci.org/egately/Novalocalization)
[![Quality Score](https://img.shields.io/scrutinizer/g/egately/Novalocalization.svg?style=flat-square)](https://scrutinizer-ci.com/g/egately/Novalocalization)
[![Total Downloads](https://img.shields.io/packagist/dt/egately/Novalocalization.svg?style=flat-square)](https://packagist.org/packages/egately/Novalocalization)


This is where your description should go. Try and limit it to a paragraph or two.

Add a screenshot of the tool here.

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require egately/Novalocalization
```

Next up, you must register the tool with Nova. This is typically done in the `tools` method of the `NovaServiceProvider`.

```php
// in app/Providers/NovaServiceProvider.php

// ...

public function tools()
{
    return [
        // ...
        new \Egately\Novalocalization\Tool(),
    ];
}
```

## Usage

Click on the "Novalocalization" menu item in your Nova app to see the tool provided by this package.

## Testing

``` bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email developer@egate.ly instead of using the issue tracker.

## Postcardware

You're free to use this package, but if it makes it to your production environment we highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Kruikstraat 22, 2018 Antwerp, Belgium.

We publish all received postcards [on our company website](https://spatie.be/en/opensource/postcards).

## Credits

- [Salah Elabbar](https://github.com/egately)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
