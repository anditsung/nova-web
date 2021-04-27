<?php


namespace Tsung\NovaWeb\Commands;


use Illuminate\Console\Command;

class Install extends Command
{

    protected $signature = "novaweb:install";

    protected $description = "Install NovaWeb";

    public function handle()
    {
        $this->info('Publishing novaweb fonts');
        $this->call('vendor:publish', ['--tag' => 'novaweb-fonts', '--force' => true]);

        $this->info('Publishing novaweb javascript');
        $this->call('vendor:publish', ['--tag' => 'novaweb-js', '--force' => true]);

        $this->info('Publishing novaweb css');
        $this->call('vendor:publish', ['--tag' => 'novaweb-css', '--force' => true]);

        $this->info('Publishing novaweb webpack');
        $this->call('vendor:publish', ['--tag' => 'novaweb-mix', '--force' => true]);

        $this->info('Publishing novaweb tailwind');
        $this->call('vendor:publish', ['--tag' => 'novaweb-tailwind', '--force' => true]);

        $this->info('Publishing novaweb package');
        $this->call('vendor:publish', ['--tag' => 'novaweb-package', '--force' => true]);

        $this->info('Publishing novaweb public');
        $this->call('vendor:publish', ['--tag' => 'novaweb-public', '--force' => true]);

        $this->info('Publishing novaweb view');
        $this->call('vendor:publish', ['--tag' => 'novaweb-view', '--force' => true]);

        $this->info('Publishing novaweb route');
        $this->call('vendor:publish', ['--tag' => 'novaweb-route', '--force' => true]);

        $this->info('Publishing novaweb controller');
        $this->call('vendor:publish', ['--tag' => 'novaweb-controller', '--force' => true]);
    }

}
