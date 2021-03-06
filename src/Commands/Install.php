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
        $this->call('vendor:publish', ['--tag' => 'novaweb-fonts']);

        if (file_exists('/resources/js/app.js')) {
            $this->info('Backup javascript');
            copy(base_path('/resources/js/app.js'), 'app.js.backup');
        }
        if (file_exists('/resources/js/bootstrap.js')) {
            $this->info('Backup bootstrap.js');
            copy(base_path('/resources/js/bootstrap.js'), 'bootstrap.js.backup');
        }
        $this->info('Publishing novaweb javascript');
        $this->call('vendor:publish', ['--tag' => 'novaweb-js', '--force' => true]);

        $this->info('Publishing novaweb sass');
        $this->call('vendor:publish', ['--tag' => 'novaweb-sass']);

        if(file_exists('/webpack.mix.js')) {
            $this->info('Backup webpack.mix.js');
            copy(base_path('/webpack.mix.js'), base_path('/webpack.mix.js.backup'));
        }
        $this->info('Publishing novaweb webpack');
        $this->call('vendor:publish', ['--tag' => 'novaweb-mix', '--force' => true]);

        if (file_exists('/tailwind.js')) {
            $this->info('Backup tailwind.js');
            copy(base_path('/tailwind.js'), base_path('/tailwind.js.backup'));
        }
        $this->info('Publishing novaweb tailwind');
        $this->call('vendor:publish', ['--tag' => 'novaweb-tailwind', '--force' => true]);

        $this->info('Backup package.json');
        copy(base_path('/package.json'), base_path('/package.json.backup'));
        $this->info('Publishing novaweb package');
        $this->call('vendor:publish', ['--tag' => 'novaweb-package', '--force' => true]);

        $this->info('Publishing novaweb public');
        $this->call('vendor:publish', ['--tag' => 'novaweb-public']);

        $this->info('Publishing novaweb welcome');
        $this->call('vendor:publish', ['--tag' => 'novaweb-welcome', '--force' => true]);
    }

}
