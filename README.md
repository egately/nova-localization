
# Novalocalization

[![Latest Version on Packagist](https://img.shields.io/packagist/v/egately/Novalocalization.svg?style=flat-square)](https://packagist.org/packages/egately/Novalocalization)
![CircleCI branch](https://img.shields.io/circleci/project/github/egately/Novalocalization/master.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/egately/Novalocalization/master.svg?style=flat-square)](https://travis-ci.org/egately/Novalocalization)
[![Quality Score](https://img.shields.io/scrutinizer/g/egately/Novalocalization.svg?style=flat-square)](https://scrutinizer-ci.com/g/egately/Novalocalization)
[![Total Downloads](https://img.shields.io/packagist/dt/egately/Novalocalization.svg?style=flat-square)](https://packagist.org/packages/egately/Novalocalization)


Advanced localization for Laravel Nova. This package allows you to translate your Nova resources into multiple languages. 




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
