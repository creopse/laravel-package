<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Model;

class AppInformation extends Model
{
    protected $guarded = [];

    /**
     * The list of valid keys for app/base information entries.
     * Mirrors the AppInformationObject TypeScript interface.
     *
     * @var array<int, string>
     */
    public const VALID_KEYS = [
        'name',
        'icon',
        'oneColorIcon',
        'logo',
        'oneColorLogo',
        'phone',
        'email',
        'address',
        'postalCode',
        'description',
        'primaryColor',
        'secondaryColor',
        'accentColor',
        'facebook',
        'twitter',
        'instagram',
        'whatsapp',
        'linkedin',
        'youtube',
        'pinterest',
        'snapchat',
        'tiktok',
        'telegram',
        'discord',
        'reddit',
        'tumblr',
        'vimeo',
        'twitch',
        'github',
        'dribbble',
        'behance',
        'medium',
        'stackOverflow',
        'threads',
        'messenger',
        'playstore',
        'appstore',
        'additionalInfo',
    ];
}
